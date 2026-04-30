import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    '': ['', '', '', ''],
    'Resources': ['Travel Guide', 'Accommodation', 'Code of Conduct'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-white border-t border-black/10 dark:bg-black dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* add the icon here */}
            <div>
              <img
                src="https://media.githubusercontent.com/media/UnchartedLevi/RAVE-camp/refs/heads/main/src/assets/log.png"
                alt="RAVE Camp"
                className="h-16 sm:h-20 lg:h-24 w-auto"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Africa's premier youth leadership movement. Empowering the next generation of changemakers through transformative experiences.
            </p>

            <div className="space-y-3">
              <a href="mailto:hello@ravecamp.org" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@ravecamp.org</span>
              </a>

              <a href="tel:+2348063062447" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+234 806 306 2447</span>
              </a>

              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Forthright Gardens Estate, Lagos-Ibadan Expressway</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-900 dark:text-white font-bold mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-black/10 dark:border-white/10">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 dark:bg-white/5 dark:border-white/10"
              >
                <social.icon className="w-5 h-5 text-gray-600 hover:text-white dark:text-gray-400" />
              </a>
            ))}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348063062447"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-black/10 dark:border-white/10">
          <p className="text-gray-500 text-sm">
            © 2026 R.A.V.E. Camp. All rights reserved. Built with passion for Africa's youth.
          </p>
        </div>
      </div>
    </footer>
  );
}
