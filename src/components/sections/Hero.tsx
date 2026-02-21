import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const slides = [
  {
    highlight: 'Релокация',
    subtitle: 'по всему миру более',
    accent: '7 лет',
  },
  {
    highlight: 'Релокация',
    subtitle: 'и запуск',
    accent: 'бизнеса в ОАЭ',
  },
  {
    highlight: 'Паспорт',
    subtitle: 'или ВНЖ',
    accent: 'в Европе',
  },
  {
    highlight: 'Гражданство',
    subtitle: 'за',
    accent: '3 месяца',
  },
  {
    highlight: 'Эмиграция',
    subtitle: 'талантов',
    accent: 'в США',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBackground} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/70 text-lg mb-4"
            >
              Мы помогаем с
            </motion.p>

            <div className="min-h-[180px] md:min-h-[200px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                    <span className="text-accent">{slides[currentSlide].highlight}</span>
                    <br />
                    <span className="text-white/80 text-2xl md:text-3xl lg:text-4xl font-normal">
                      {slides[currentSlide].subtitle}
                    </span>
                    <br />
                    <span>{slides[currentSlide].accent}</span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg max-w-lg mb-8"
            >
              Живите, работайте и путешествуйте с нашей помощью по всему миру без ограничений
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#contact">
                  Бесплатная консультация
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-10 bg-accent' : 'w-4 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
