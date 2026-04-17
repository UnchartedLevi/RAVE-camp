import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Programme", href: "#programme" },
    { name: "Pricing", href: "#pricing" },
    { name: "Media", href: "#media" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAVBAR */}
        <div className="h-20 lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0 hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://media.githubusercontent.com/media/UnchartedLevi/RAVE-camp/refs/heads/main/src/assets/log.png"
              alt="RAVE Camp"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {/* Links */}
            <div className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm xl:text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300 shrink-0"
              >
                {theme === "light" ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              {/* CTA */}
              <Button
                onClick={scrollToPricing}
                className="h-11 px-5 xl:px-6 text-sm xl:text-base whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/20"
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* MOBILE / TABLET NAV */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Theme */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300"
            >
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100 border-t border-border"
            : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl`}
      >
        <div className="px-4 sm:px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left rounded-xl px-4 py-3 text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
            >
              {link.name}
            </button>
          ))}

          <div className="pt-3">
            <Button
              onClick={scrollToPricing}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}