import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Star } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#countries', label: 'Страны' },
  { href: '#process', label: 'Как мы работаем' },
  { href: '#about', label: 'О нас' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Star className="w-5 h-5 text-accent fill-accent" />
          </div>
          <span className={`font-display text-xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            LCC
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors link-underline ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+7800000000" className={`flex items-center gap-2 font-medium ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            <Phone className="w-4 h-4" />
            <span>+7 (800) 000-00-00</span>
          </a>
          <Button variant={isScrolled ? 'default' : 'hero'} size="lg">
            Консультация
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 border-b border-border"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+7800000000" className="flex items-center gap-2 text-foreground py-2">
                <Phone className="w-4 h-4" />
                <span>+7 (800) 000-00-00</span>
              </a>
              <Button variant="hero" size="lg" className="mt-2 w-full">
                Бесплатная консультация
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
