import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const regions = [
  {
    name: 'Европа',
    countries: [
      { name: 'Австрия', flag: '🇦🇹', popular: true },
      { name: 'Испания', flag: '🇪🇸', popular: true },
      { name: 'Италия', flag: '🇮🇹', popular: true },
      { name: 'Польша', flag: '🇵🇱', popular: true },
      { name: 'Греция', flag: '🇬🇷', popular: false },
      { name: 'Болгария', flag: '🇧🇬', popular: false },
      { name: 'Франция', flag: '🇫🇷', popular: false },
      { name: 'Португалия', flag: '🇵🇹', popular: false },
      { name: 'Венгрия', flag: '🇭🇺', popular: false },
      { name: 'Словакия', flag: '🇸🇰', popular: false },
      { name: 'Литва', flag: '🇱🇹', popular: false },
      { name: 'Бельгия', flag: '🇧🇪', popular: false },
    ],
  },
  {
    name: 'Ближний Восток и Азия',
    countries: [
      { name: 'Израиль', flag: '🇮🇱', popular: true },
      { name: 'ОАЭ (Дубай)', flag: '🇦🇪', popular: true },
      { name: 'Турция', flag: '🇹🇷', popular: false },
      { name: 'Армения', flag: '🇦🇲', popular: false },
    ],
  },
  {
    name: 'Америка',
    countries: [
      { name: 'США', flag: '🇺🇸', popular: true },
      { name: 'Аргентина', flag: '🇦🇷', popular: false },
      { name: 'Парагвай', flag: '🇵🇾', popular: false },
      { name: 'Чили', flag: '🇨🇱', popular: false },
    ],
  },
];

export function Countries() {
  return (
    <section id="countries" className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" /> 25+ стран
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Работаем по всему миру
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Специализация на странах ЕС с сетью партнёров на местах
          </p>
        </motion.div>

        {/* Regions */}
        <div className="space-y-12">
          {regions.map((region, regionIndex) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-accent" />
                {region.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {region.countries.map((country, countryIndex) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: countryIndex * 0.05 }}
                    className={`relative group bg-card rounded-xl p-4 border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      country.popular
                        ? 'border-accent/30 shadow-sm'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    {country.popular && (
                      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                        ТОП
                      </span>
                    )}
                    <div className="text-3xl mb-2">{country.flag}</div>
                    <span className="text-sm font-medium text-foreground">
                      {country.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" className="group">
            Все страны и программы
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
