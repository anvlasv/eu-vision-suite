import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Clock, Award, FileCheck, Users } from 'lucide-react';

const guarantees = [
  { icon: ShieldCheck, text: 'Возвращаем деньги в случае отказа' },
  { icon: FileCheck, text: '100% выполнение обязательств по договору' },
  { icon: Scale, text: 'Юристы с 30-летним опытом работы' },
  { icon: Clock, text: '7+ лет на рынке миграционных услуг' },
  { icon: Award, text: '90% клиентов получают одобрение' },
  { icon: Users, text: 'Официальная регистрация компании' },
];

export function Guarantees() {
  return (
    <section id="guarantees" className="section-padding bg-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <span>★</span> Гарантии
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Наши гарантии
            </h2>
            <p className="text-2xl text-white/60 font-display mb-8">
              — это ваша уверенность
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Мы обеспечиваем безопасность наших клиентов и полную прозрачность в расчётах.
              Работаем по официальному договору и помогаем получить визы, ВНЖ или
              гражданство в рамках действующих правовых норм.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-white font-medium text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
