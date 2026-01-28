import { motion } from 'framer-motion';
import { MessageSquare, FileText, FolderCheck, Plane, Award, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Консультация',
    description: 'Бесплатно изучаем вашу ситуацию и подбираем оптимальную программу',
    time: 'Бесплатно',
  },
  {
    icon: FileText,
    title: 'Заключение договора',
    description: 'Фиксируем этапы, сроки и гарантии. Работаем полностью официально',
    time: 'День 1',
  },
  {
    icon: FolderCheck,
    title: 'Подготовка документов',
    description: 'Собираем все документы, заполняем анкеты, взаимодействуем с инстанциями',
    time: '1-4 недели',
  },
  {
    icon: Plane,
    title: 'Встреча с консулом',
    description: 'Записываем на дату, готовим к интервью, объясняем типичные вопросы',
    time: 'По записи',
  },
  {
    icon: Award,
    title: 'Получение документов',
    description: 'ВНЖ, визы, сертификаты — все необходимые документы по программе',
    time: '2-12 недель',
  },
  {
    icon: PartyPopper,
    title: 'Результат',
    description: 'Получение визы, гражданства или ВНЖ. Радуемся вместе с вами!',
    time: 'Финал',
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-background">
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
            <span>★</span> Как мы работаем
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            6 шагов к вашей цели
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Прозрачный процесс с поэтапной оплатой — вы платите по мере достижения результата
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Time Badge */}
                  <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {step.time}
                  </span>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-primary rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
            Поэтапная оплата — минимум рисков
          </h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">50%</div>
              <p className="text-white/80">При старте работы</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">25%</div>
              <p className="text-white/80">После подготовки</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">25%</div>
              <p className="text-white/80">После получения</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
