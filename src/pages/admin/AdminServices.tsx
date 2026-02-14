import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Save, X, GripVertical } from 'lucide-react';
import type { Tables } from '@/integrations/supabase/types';

type Service = Tables<'services'>;

export default function AdminServices() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Service>>({});

  const { data: services, isLoading } = useQuery({
    queryKey: ['admin-services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('sort_order');
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Service> & { id: string }) => {
      const { error } = await supabase.from('services').update(updates).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-services'] });
      setEditing(null);
      toast({ title: 'Услуга обновлена' });
    },
    onError: () => toast({ title: 'Ошибка при сохранении', variant: 'destructive' }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('services').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-services'] });
      toast({ title: 'Услуга удалена' });
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from('services').insert({
        slug: 'new-service-' + Date.now(),
        title: 'Новая услуга',
        short_description: 'Описание услуги',
        sort_order: (services?.length ?? 0) + 1,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-services'] });
      toast({ title: 'Услуга создана' });
    },
  });

  const startEdit = (service: Service) => {
    setEditing(service.id);
    setForm({ ...service });
  };

  const saveEdit = () => {
    if (!form.id) return;
    updateMutation.mutate(form as Partial<Service> & { id: string });
  };

  if (isLoading) return <div className="text-center py-12">Загрузка...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Управление услугами</h1>
          <p className="text-muted-foreground mt-1">Редактируйте тексты, цены и описания</p>
        </div>
        <Button onClick={() => createMutation.mutate()}>
          <Plus className="w-4 h-4" />
          Добавить
        </Button>
      </div>

      <div className="space-y-4">
        {services?.map((service) => (
          <div key={service.id} className="bg-card rounded-xl border border-border p-6">
            {editing === service.id ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Название</label>
                    <Input
                      value={form.title ?? ''}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                    <Input
                      value={form.slug ?? ''}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Цена</label>
                    <Input
                      value={form.price ?? ''}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Иконка (Lucide)</label>
                    <Input
                      value={form.icon ?? ''}
                      onChange={(e) => setForm({ ...form, icon: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Краткое описание</label>
                  <Textarea
                    value={form.short_description ?? ''}
                    onChange={(e) => setForm({ ...form, short_description: e.target.value })}
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Полное описание</label>
                  <Textarea
                    value={form.description ?? ''}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Особенности (через запятую)</label>
                  <Input
                    value={(form.features ?? []).join(', ')}
                    onChange={(e) => setForm({ ...form, features: e.target.value.split(', ').filter(Boolean) })}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={saveEdit} disabled={updateMutation.isPending}>
                    <Save className="w-4 h-4" />
                    Сохранить
                  </Button>
                  <Button variant="outline" onClick={() => setEditing(null)}>
                    <X className="w-4 h-4" />
                    Отмена
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-lg font-bold text-foreground">{service.title}</h3>
                    {service.price && (
                      <span className="text-sm bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                        {service.price}
                      </span>
                    )}
                    {!service.is_active && (
                      <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">
                        Скрыта
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{service.short_description}</p>
                  <p className="text-xs text-muted-foreground mt-1">/{service.slug}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button variant="outline" size="sm" onClick={() => startEdit(service)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (confirm('Удалить услугу?')) deleteMutation.mutate(service.id);
                    }}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
