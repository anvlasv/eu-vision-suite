import { motion } from 'framer-motion';
import { FileCheck, GraduationCap, Building2, Landmark, Globe, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: FileCheck,
    title: 'Визы',
    description: 'Туристические, рабочие, деловые и другие типы виз в страны ЕС и мира',
    features: ['Шенгенские визы', 'Рабочие визы', 'Бизнес-визы'],
  },
  {
    icon: Landmark,
    title: 'ВНЖ / ПМЖ',
    description: 'Вид на жительство и постоянное место жительства в европейских странах',
    features: ['ВНЖ для инвесторов', 'ВНЖ через работу', 'Семейное ВНЖ'],
  },
  {
    icon: Globe,
    title: 'Гражданство',
    description: 'Программы репатриации и получения второго гражданства',
    features: ['Репатриация', 'Натурализация', 'По инвестициям'],
  },
  {
    icon: GraduationCap,
    title: 'Образование',
    description: 'Поступление в университеты и языковые школы Европы',
    features: ['Университеты ЕС', 'Языковые курсы', 'Студенческие визы'],
  },
  {
    icon: Home,
    title: 'Недвижимость',
    description: 'Покупка недвижимости за рубежом и инвестиционные программы',
    features: ['Покупка жилья', 'Инвестиции', 'Аренда'],
  },
  {
    icon: Building2,
    title: 'Бизнес',
    description: 'Открытие бизнеса и корпоративные решения в странах ЕС',
    features: ['Регистрация компании', 'Бизнес-иммиграция', 'Налоги'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
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
            <span>★</span> Наши услуги
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Полный спектр миграционных услуг
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Помогаем на каждом этапе — от первой консультации до получения документов
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-accent text-xs">★</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                Подробнее
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
