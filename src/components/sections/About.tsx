import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Прозрачность',
    description: 'Честная оценка шансов и понятные условия без скрытых платежей',
  },
  {
    icon: Heart,
    title: 'Индивидуальный подход',
    description: 'Каждый кейс уникален — мы погружаемся в детали вашей ситуации',
  },
  {
    icon: Zap,
    title: 'Скорость',
    description: 'Быстрый ответ и оперативная работа на каждом этапе',
  },
];

const advantages = [
  'Гарантия возврата средств при отказе',
  'Работаем официально по договору',
  'Партнёры в странах ЕС',
  'Поддержка 24/7 на всех этапах',
  'Полное сопровождение до результата',
  'Подготовка к интервью с консулом',
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
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
              LCC — ваш надёжный партнёр в миграционных вопросах
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Более 10 лет мы помогаем людям осуществлять мечту о жизни в Европе.
              Наша команда специалистов знает все тонкости миграционного законодательства
              и обеспечивает максимальные шансы на успех.
            </p>

            {/* Advantages Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
