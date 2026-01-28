import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Александр М.',
    location: 'Москва → Испания',
    service: 'ВНЖ Испании',
    text: 'Благодаря LCC получил ВНЖ в Испании за 3 месяца. Всё было чётко и прозрачно, на каждом этапе держали в курсе. Особенно помогли с подготовкой к интервью в консульстве.',
    rating: 5,
  },
  {
    name: 'Мария К.',
    location: 'Санкт-Петербург → Австрия',
    service: 'Гражданство Австрии',
    text: 'Программа репатриации казалась очень сложной, но ребята разложили всё по полочкам. Документы собрали за меня, я только подписывала. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Дмитрий С.',
    location: 'Казань → Германия',
    service: 'Рабочая виза',
    text: 'Помогли с рабочей визой в Германию. Очень понравился индивидуальный подход — учли все нюансы моей ситуации. Быстро и профессионально.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/50">
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
            <span>★</span> Отзывы клиентов
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Истории наших клиентов
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реальные отзывы людей, которые уже осуществили свою мечту о переезде
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
