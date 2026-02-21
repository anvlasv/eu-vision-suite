import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/#services', label: 'Услуги' },
  { href: '/#about', label: 'О нас' },
  { href: '/#guarantees', label: 'Гарантии' },
  { href: '/#contact', label: 'Контакты' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHome && href.startsWith('/#')) {
      const el = document.querySelector(href.replace('/', ''));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? 'bg-transparent py-5'
          : 'bg-background/95 backdrop-blur-md shadow-md py-3'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Star className="w-5 h-5 text-accent fill-accent" />
          </div>
          <span className={`font-display text-xl font-bold transition-colors ${showTransparent ? 'text-white' : 'text-foreground'}`}>
            LCC
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium transition-colors link-underline ${
                showTransparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+7800000000" className={`flex items-center gap-2 font-medium ${showTransparent ? 'text-white' : 'text-foreground'}`}>
            <Phone className="w-4 h-4" />
            <span>+7 (800) 000-00-00</span>
          </a>
          <Button variant={showTransparent ? 'hero' : 'default'} size="lg" asChild>
            <a href={isHome ? '#contact' : '/#contact'}>Консультация</a>
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${showTransparent ? 'text-white' : 'text-foreground'}`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

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
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground font-medium py-2 border-b border-border"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+7800000000" className="flex items-center gap-2 text-foreground py-2">
                <Phone className="w-4 h-4" />
                <span>+7 (800) 000-00-00</span>
              </a>
              <Button variant="hero" size="lg" className="mt-2 w-full" asChild>
                <a href={isHome ? '#contact' : '/#contact'}>Бесплатная консультация</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
