import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Plus, Save, X, Pencil, Trash2 } from 'lucide-react';

export default function AdminContent() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<{ key: string; title: string; content: string; page_slug: string }>({
    key: '', title: '', content: '', page_slug: '',
  });
  const [isCreating, setIsCreating] = useState(false);

  const { data: contents, isLoading } = useQuery({
    queryKey: ['admin-contents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_contents')
        .select('*')
        .order('page_slug')
        .order('key');
      if (error) throw error;
      return data;
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async (data: { id?: string; key: string; title: string | null; content: string | null; page_slug: string }) => {
      if (data.id) {
        const { error } = await supabase.from('page_contents').update({
          title: data.title,
          content: data.content,
          page_slug: data.page_slug,
        }).eq('id', data.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('page_contents').insert({
          key: data.key,
          title: data.title,
          content: data.content,
          page_slug: data.page_slug,
        });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-contents'] });
      setEditing(null);
      setIsCreating(false);
      toast({ title: 'Контент сохранён' });
    },
    onError: () => toast({ title: 'Ошибка при сохранении', variant: 'destructive' }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('page_contents').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-contents'] });
      toast({ title: 'Контент удалён' });
    },
  });

  if (isLoading) return <div className="text-center py-12">Загрузка...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Управление контентом</h1>
          <p className="text-muted-foreground mt-1">Текстовые блоки страниц</p>
        </div>
        <Button onClick={() => { setIsCreating(true); setForm({ key: '', title: '', content: '', page_slug: '' }); }}>
          <Plus className="w-4 h-4" />
          Добавить
        </Button>
      </div>

      {/* Create form */}
      {isCreating && (
        <div className="bg-card rounded-xl border border-border p-6 mb-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Ключ (уникальный)</label>
              <Input value={form.key} onChange={(e) => setForm({ ...form, key: e.target.value })} placeholder="hero_title" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Страница</label>
              <Input value={form.page_slug} onChange={(e) => setForm({ ...form, page_slug: e.target.value })} placeholder="home" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Заголовок</label>
            <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Содержание</label>
            <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={4} />
          </div>
          <div className="flex gap-2">
            <Button onClick={() => upsertMutation.mutate({ ...form, title: form.title || null, content: form.content || null })}>
              <Save className="w-4 h-4" /> Сохранить
            </Button>
            <Button variant="outline" onClick={() => setIsCreating(false)}>
              <X className="w-4 h-4" /> Отмена
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {contents?.map((item) => (
          <div key={item.id} className="bg-card rounded-xl border border-border p-6">
            {editing === item.id ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Ключ</label>
                    <Input value={item.key} disabled className="opacity-60" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Страница</label>
                    <Input value={form.page_slug} onChange={(e) => setForm({ ...form, page_slug: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Заголовок</label>
                  <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Содержание</label>
                  <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={4} />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => upsertMutation.mutate({ id: item.id, key: item.key, title: form.title || null, content: form.content || null, page_slug: form.page_slug })}>
                    <Save className="w-4 h-4" /> Сохранить
                  </Button>
                  <Button variant="outline" onClick={() => setEditing(null)}>
                    <X className="w-4 h-4" /> Отмена
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">{item.key}</span>
                    <span className="text-xs text-muted-foreground">• {item.page_slug || 'global'}</span>
                  </div>
                  {item.title && <h3 className="font-semibold text-foreground">{item.title}</h3>}
                  {item.content && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.content}</p>}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button variant="outline" size="sm" onClick={() => {
                    setEditing(item.id);
                    setForm({ key: item.key, title: item.title ?? '', content: item.content ?? '', page_slug: item.page_slug });
                  }}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    if (confirm('Удалить?')) deleteMutation.mutate(item.id);
                  }}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}

        {contents?.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Контент пока не добавлен. Нажмите «Добавить» чтобы создать первый блок.
          </div>
        )}
      </div>
    </div>
  );
}
