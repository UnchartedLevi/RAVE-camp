import { motion } from 'motion/react';
import { Star, Award, Heart } from 'lucide-react';
import s1 from '../../assets/sglogosolid.png';
import s2 from '../../assets/sgclogo.png';
import s3 from '../../assets/shslogo.png';

export function Sponsors() {
  const sponsors = [
    {
      tier: 'Gold Sponsor',
      tierTextColor: 'text-yellow-600 dark:text-amber-400',
      tierBg: 'bg-yellow-50 dark:bg-yellow-500/10',
      tierBorder: 'border-yellow-200 dark:border-yellow-500/20',
      icon: Star,
      iconColor: 'text-yellow-500',
      src: s1, // ← replace with your image URL
      alt: 'Gold Sponsor logo',
    },
    {
      tier: 'Platinum Sponsor',
      tierTextColor: 'text-purple-600 dark:text-purple-400',
      tierBg: 'bg-purple-50 dark:bg-purple-500/10',
      tierBorder: 'border-purple-200 dark:border-purple-500/20',
      icon: Award,
      iconColor: 'text-purple-500',
      src: s2, // ← replace with your image URL
      alt: 'Platinum Sponsor logo',
    },
    {
      tier: 'Community Partner',
      tierTextColor: 'text-pink-600 dark:text-pink-400',
      tierBg: 'bg-pink-50 dark:bg-pink-500/10',
      tierBorder: 'border-pink-200 dark:border-pink-500/20',
      icon: Heart,
      iconColor: 'text-pink-500',
      src: s3, // ← replace with your image URL
      alt: 'Community Partner logo',
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Sponsors /<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> Partners</span>
          </h2>
          <p className="text-xl text-slate-900 dark:text-gray-400 max-w-3xl mx-auto">
            Powered by organizations committed to developing Africa's next generation of leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => {
            const Icon = sponsor.icon;
            return (
              <motion.div
                key={sponsor.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center dark:from-white/10 dark:to-white/5 dark:border-white/20 flex flex-col items-center gap-4"
              >
                {/* Tier Badge */}
                

                {/* Sponsor Image — replace src with your actual image URL */}
                <div className="w-full aspect-square max-w-[180px] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}