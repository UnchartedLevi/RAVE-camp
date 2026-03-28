import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Speakers } from './components/Speakers';
import { Programme } from './components/Programme';
import { Registration } from './components/Registration';
import { Pricing } from './components/Pricing';
import { LiveFeatures } from './components/LiveFeatures';
import { Media } from './components/Media';
import { Sponsors } from './components/Sponsors';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Speakers />
        <Programme />
        <Registration />
        <Pricing />
        <LiveFeatures />
        <Media />
        <Sponsors />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}