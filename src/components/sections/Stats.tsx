import { motion } from 'framer-motion';
import { Users, Globe, Calendar, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '10+',
    label: 'Лет опыта',
    description: 'На рынке миграционных услуг',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Довольных клиентов',
    description: 'Успешно получили документы',
  },
  {
    icon: Globe,
    value: '25+',
    label: 'Стран мира',
    description: 'Работаем по всему миру',
  },
  {
    icon: Trophy,
    value: '98%',
    label: 'Успешных кейсов',
    description: 'Положительных решений',
  },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
