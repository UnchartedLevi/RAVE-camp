import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';
import logo from '../../assets/log.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Programme', href: '#programme' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Media', href: '#media' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-24 gap-4">
          {/* Logo */}
          <button id='theLogo'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <img id='looo'
              src={logo}
              alt="RAVE Camp"
              className="h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-4 w-full md:w-auto">
            <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center md:justify-start min-w-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end mt-2 md:mt-0">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              <Button
                onClick={() => scrollToSection('#register')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 whitespace-nowrap"
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id='themeToggle'
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-xl font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#register')}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}