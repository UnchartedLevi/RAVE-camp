import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Speakers } from './components/Speakers';
import { Programme } from './components/Programme';
import { Registration } from './components/Registration';
import { Pricing } from './components/Pricing';
import { LiveFeatures } from './components/LiveFeatures';
// TODO: Re-enable after Day 1
// import { Media } from './components/Media';
import { Sponsors } from './components/Sponsors';
// TODO: Re-enable after Day 1
// import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background px-4 sm:px-6 md:px-8 overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Speakers />
        {/* <Programme /> */}
        {/* <Registration /> */}
        <Pricing />
        {/* <LiveFeatures /> */}
        {/* TODO: Re-enable after Day 1 */}
        {/* <Media /> */}
        <Sponsors />
        {/* TODO: Re-enable after Day 1 */}
        {/* <Testimonials /> */}
        <FAQ />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}