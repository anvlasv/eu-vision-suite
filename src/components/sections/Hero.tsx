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

// Puzzle piece clip paths for mosaic effect
const puzzlePieces = [
  { row: 0, col: 0, delay: 0 },
  { row: 0, col: 1, delay: 0.1 },
  { row: 0, col: 2, delay: 0.2 },
  { row: 1, col: 0, delay: 0.15 },
  { row: 1, col: 1, delay: 0.25 },
  { row: 1, col: 2, delay: 0.3 },
  { row: 2, col: 0, delay: 0.2 },
  { row: 2, col: 1, delay: 0.35 },
  { row: 2, col: 2, delay: 0.4 },
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Slider */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-muted-foreground text-lg mb-4"
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
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-primary">{slides[currentSlide].highlight}</span>
                    <br />
                    <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal">
                      {slides[currentSlide].subtitle}
                    </span>
                    <br />
                    <span className="text-foreground">{slides[currentSlide].accent}</span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-lg mb-8"
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
                    i === currentSlide ? 'w-10 bg-accent' : 'w-4 bg-border'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Puzzle Image Mosaic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] grid grid-cols-3 grid-rows-3 gap-2 rounded-2xl overflow-hidden">
              {puzzlePieces.map((piece, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: piece.delay + 0.3 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${heroBackground})`,
                      backgroundPosition: `${piece.col * 50}% ${piece.row * 50}%`,
                      backgroundSize: '300% 300%',
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
