import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: service, isLoading } = useQuery({
    queryKey: ['service', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug!)
        .eq('is_active', true)
        .single();
      if (error) throw error;
      return data;
    },
  });

  const { data: otherServices } = useQuery({
    queryKey: ['other-services', slug],
    queryFn: async () => {
      const { data } = await supabase
        .from('services')
        .select('slug, title, icon, short_description')
        .eq('is_active', true)
        .neq('slug', slug!)
        .order('sort_order');
      return data ?? [];
    },
  });

  const getIcon = (iconName: string | null) => {
    if (!iconName) return LucideIcons.FileCheck;
    return (LucideIcons as any)[iconName] || LucideIcons.FileCheck;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Услуга не найдена</h1>
          <Link to="/">
            <Button>На главную</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = getIcon(service.icon);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-wide">
            <Link to="/#services" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                {service.price && (
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
                    {service.price}
                  </span>
                )}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 max-w-3xl">
                {service.short_description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">Описание услуги</h2>
                  <div className="prose prose-lg text-muted-foreground whitespace-pre-line">
                    {service.description}
                  </div>

                  {service.features && service.features.length > 0 && (
                    <div className="mt-10">
                      <h3 className="font-display text-xl font-bold text-foreground mb-6">Что включено</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 bg-muted/50 rounded-xl p-4">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <div className="bg-card rounded-2xl border border-border p-6 sticky top-28">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">Заказать услугу</h3>
                    {service.price && (
                      <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    )}
                    <Button variant="hero" size="xl" className="w-full mb-4" asChild>
                      <a href="#contact">
                        Получить консультацию
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Бесплатная первичная консультация
                    </p>
                  </div>

                  {/* Other services */}
                  {otherServices && otherServices.length > 0 && (
                    <div className="mt-8">
                      <h4 className="font-display font-bold text-foreground mb-4">Другие услуги</h4>
                      <div className="space-y-3">
                        {otherServices.map((s) => {
                          const SIcon = getIcon(s.icon);
                          return (
                            <Link
                              key={s.slug}
                              to={`/uslugi/${s.slug}`}
                              className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
                            >
                              <SIcon className="w-5 h-5 text-primary" />
                              <span className="font-medium text-foreground text-sm">{s.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
