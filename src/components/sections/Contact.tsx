import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (800) 000-00-00',
    href: 'tel:+7800000000',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Написать в WhatsApp',
    href: 'https://wa.me/7800000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@lcc.ru',
    href: 'mailto:info@lcc.ru',
  },
  {
    icon: MapPin,
    label: 'Офис',
    value: 'Москва, ул. Примерная, 1',
    href: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <span>★</span> Связаться с нами
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Получите бесплатную консультацию
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              для обсуждения вашей ситуации
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Заявка на консультацию
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    placeholder="Как к вам обращаться?"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Интересующая услуга
                  </label>
                  <select className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground">
                    <option value="">Выберите услугу</option>
                    <option value="visa">Визы</option>
                    <option value="vnj">ВНЖ / ПМЖ</option>
                    <option value="citizenship">Гражданство</option>
                    <option value="education">Образование</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Комментарий (необязательно)
                  </label>
                  <Textarea
                    placeholder="Расскажите кратко о вашей ситуации..."
                    rows={3}
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full group">
                  Отправить заявку
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
