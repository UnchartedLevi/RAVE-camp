import { motion } from 'motion/react';
import { Star, Award, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Sponsors() {
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

        {/* Sponsor Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-50 to-white border border-slate-400 rounded-xl p-12 text-center dark:from-white/10 dark:to-white/5 dark:border-white/20"
        >
          <p className="text-2xl text-slate-600 dark:text-gray-300 font-semibold">
            Sponsor logos coming soon
          </p>
          <p className="text-base text-slate-500 dark:text-gray-400 mt-4">
            We're partnering with leading organizations across Africa and beyond to make this event possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
