import { motion } from 'framer-motion';
import { Globe, UserCheck, ShieldCheck, Users } from 'lucide-react';

const props = [
  {
    icon: Globe,
    title: 'Откроем мир без границ',
    description: 'Проведём через весь процесс от первой консультации до одобрения.',
  },
  {
    icon: UserCheck,
    title: 'Персональный эксперт',
    description: 'Подберём и оформим ВНЖ или гражданство в соответствии с вашими целями.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантированный результат',
    description: 'Выполняем обязательства по договору. Возврат средств при отказе.',
  },
  {
    icon: Users,
    title: 'Профессиональная команда',
    description: 'Специалисты в Европе и СНГ отслеживают изменения законодательства.',
  },
];

export function ValueProps() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <prop.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {prop.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
