import { motion } from 'framer-motion';
import { Target, Scale, Banknote, Lock, ClipboardCheck, Users } from 'lucide-react';

const values = [
  { icon: Target, title: 'Результат в любой ситуации', description: 'Безвыходных ситуаций для нас не существует — всегда найдём альтернативный вариант.' },
  { icon: Scale, title: 'Легальность', description: 'Все наши услуги легальны и соответствуют законам стран, в которых мы работаем.' },
  { icon: Banknote, title: 'Честная цена', description: 'Прозрачная ценовая политика без скрытых платежей на всём протяжении процесса.' },
  { icon: Lock, title: 'Конфиденциальность', description: 'Гарантируем полную конфиденциальность и защиту персональных данных по договору.' },
  { icon: ClipboardCheck, title: 'Совершенство в деталях', description: 'Составляем эффективный план действий и тщательно проверяем все нюансы.' },
  { icon: Users, title: 'Универсальный подход', description: 'Помогаем клиентам любой профессии, семейного положения и бюджета.' },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <span>★</span> О компании
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              О компании
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Как международный предприниматель, для меня всегда было важно иметь свободу
              передвижения, возможность жить и зарабатывать в любой стране мира. И мне это
              удалось. Став космополитом, я увидел свою миссию в помощи другим людям обрести
              свободу — и основал миграционный центр.
            </p>
            <p className="text-muted-foreground mb-6">
              Мы оформляем визы во все страны мира, готовим документы на гражданство и ВНЖ,
              обеспечиваем юридическое сопровождение.
            </p>
            <div className="border-l-4 border-accent pl-4">
              <p className="font-display text-lg font-bold text-foreground">Основатель LCC</p>
              <p className="text-muted-foreground">Lea Citizenship Center</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary/40" />
                </div>
                <p className="text-muted-foreground text-sm">Фото основателя</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
