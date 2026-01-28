import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'Какой шанс одобрения моей визы/ВНЖ?',
    answer: 'Мы честно оцениваем ваши шансы на бесплатной консультации. Благодаря опыту и тщательной подготовке документов, 98% наших кейсов получают положительное решение. Мы не берёмся за заведомо невыполнимые случаи.',
  },
  {
    question: 'Какие документы нужны для подачи?',
    answer: 'Пакет документов зависит от страны и типа программы. После консультации мы предоставляем детальный чек-лист всех необходимых документов и помогаем с их подготовкой и переводом.',
  },
  {
    question: 'Сколько времени занимает весь процесс?',
    answer: 'Сроки варьируются: туристические визы — от 2 недель, рабочие визы — от 1-2 месяцев, ВНЖ — от 2-4 месяцев, гражданство — от 6 месяцев до 2 лет. Точные сроки зависят от страны и программы.',
  },
  {
    question: 'Что делать, если раньше был отказ в визе?',
    answer: 'Мы специализируемся на сложных кейсах. Анализируем причины прошлого отказа, устраняем проблемы и готовим новый пакет документов. Многие клиенты успешно получают визы после предыдущих отказов.',
  },
  {
    question: 'Есть ли гарантии возврата денег?',
    answer: 'Да, мы работаем с поэтапной оплатой и предоставляем гарантию возврата средств в случае отказа по нашей вине. Все условия фиксируются в договоре.',
  },
  {
    question: 'Нужно ли ехать в консульство лично?',
    answer: 'В большинстве случаев — да, для подачи биометрии и интервью. Мы полностью готовим вас к встрече с консулом: объясняем типичные вопросы, помогаем с записью на удобную дату.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            <span>★</span> FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
