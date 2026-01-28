import { Star, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Услуги',
    links: [
      { label: 'Визы', href: '#' },
      { label: 'ВНЖ / ПМЖ', href: '#' },
      { label: 'Гражданство', href: '#' },
      { label: 'Образование', href: '#' },
      { label: 'Недвижимость', href: '#' },
    ],
  },
  {
    title: 'Страны',
    links: [
      { label: 'Испания', href: '#' },
      { label: 'Италия', href: '#' },
      { label: 'Австрия', href: '#' },
      { label: 'Польша', href: '#' },
      { label: 'Все страны →', href: '#countries' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Кейсы', href: '#' },
      { label: 'Отзывы', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Контакты', href: '#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
              <span className="font-display text-xl font-bold">LCC</span>
            </a>
            <p className="text-white/70 mb-6 max-w-xs">
              Lea Citizenship Center — ваш надёжный партнёр в получении виз,
              ВНЖ и гражданства в странах Европы и мира.
            </p>
            <div className="space-y-3">
              <a href="tel:+7800000000" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +7 (800) 000-00-00
              </a>
              <a href="mailto:info@lcc.ru" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                info@lcc.ru
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4" />
                Москва, ул. Примерная, 1
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 LCC — Lea Citizenship Center. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
