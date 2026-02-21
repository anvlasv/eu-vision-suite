import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ValueProps } from '@/components/sections/ValueProps';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Guarantees } from '@/components/sections/Guarantees';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <Guarantees />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
