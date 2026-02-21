import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'citizenship', label: 'Гражданство' },
  { id: 'residence', label: 'ВНЖ' },
  { id: 'business', label: 'Для бизнеса' },
];

const tabContent: Record<string, {
  description: string;
  note?: string;
  link: string;
  countries: { name: string; flag: string; price: string; slug: string }[];
}> = {
  citizenship: {
    description: 'Проведём через весь процесс от первой консультации до одобрения.',
    note: '* в зависимости от страны',
    link: '/uslugi/grazhdanstvo',
    countries: [
      { name: 'Румыния', flag: '🇷🇴', price: 'от 5 000€', slug: 'grazhdanstvo' },
      { name: 'Болгария', flag: '🇧🇬', price: 'от 4 000€', slug: 'grazhdanstvo' },
      { name: 'Польша', flag: '🇵🇱', price: 'от 6 000€', slug: 'grazhdanstvo' },
    ],
  },
  residence: {
    description: 'Подберём оптимальную программу ВНЖ в зависимости от ваших целей.',
    note: '* в зависимости от страны',
    link: '/uslugi/vnzh-pmzh',
    countries: [
      { name: 'Испания', flag: '🇪🇸', price: 'от 3 500€', slug: 'vnzh-pmzh' },
      { name: 'Франция', flag: '🇫🇷', price: 'от 7 000€', slug: 'vnzh-pmzh' },
      { name: 'Италия', flag: '🇮🇹', price: 'от 4 000€', slug: 'vnzh-pmzh' },
      { name: 'Германия', flag: '🇩🇪', price: 'от 5 000€', slug: 'vnzh-pmzh' },
      { name: 'Австрия', flag: '🇦🇹', price: 'от 6 000€', slug: 'vnzh-pmzh' },
    ],
  },
  business: {
    description: 'Регистрация компании и бухгалтерское сопровождение.',
    link: '/uslugi/biznes',
    countries: [
      { name: 'ОАЭ', flag: '🇦🇪', price: 'от 6 500$', slug: 'biznes' },
      { name: 'Турция', flag: '🇹🇷', price: 'от 2 350$', slug: 'biznes' },
      { name: 'Польша', flag: '🇵🇱', price: 'от 3 000€', slug: 'biznes' },
    ],
  },
};

export function Services() {
  const [activeTab, setActiveTab] = useState('citizenship');
  const content = tabContent[activeTab];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            <span>★</span> Наши услуги
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Наши услуги
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="max-w-lg">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {tabs.find((t) => t.id === activeTab)?.label}
                  </h3>
                  <p className="text-muted-foreground">{content.description}</p>
                  {content.note && (
                    <p className="text-sm text-muted-foreground/70 mt-2">{content.note}</p>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" asChild>
                    <a href="#contact">Консультация</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to={content.link}>Подробнее</Link>
                  </Button>
                </div>
              </div>

              {/* Country Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {content.countries.map((country, i) => (
                  <Link
                    key={i}
                    to={`/uslugi/${country.slug}`}
                    className="group flex flex-col items-center p-5 rounded-xl bg-muted/50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="text-4xl mb-3">{country.flag}</span>
                    <span className="font-semibold text-foreground text-sm mb-1">{country.name}</span>
                    <span className="text-primary font-bold text-sm">{country.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
