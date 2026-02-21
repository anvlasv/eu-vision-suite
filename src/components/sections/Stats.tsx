import { motion } from 'framer-motion';

const stats = [
  { value: '2016', label: 'года', description: 'Работаем с' },
  { value: '3', label: 'странах', description: 'Офисы в' },
  { value: '47', label: 'специалистов', description: 'В штате' },
  { value: '90%', label: 'одобрений', description: 'Клиентов' },
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
              <div className="text-sm text-muted-foreground mb-1">{stat.description}</div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
