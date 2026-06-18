import { motion } from 'motion/react';
import { Award, ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../../assets/racepics/mentor-moment.jpg';

export function Hero() {
  const stats = [
    { icon: Users, value: '500+', label: 'Young Leaders' },
    { icon: Award, value: '30+', label: 'Expert Speakers' },
    { icon: MapPin, value: '15+', label: 'Countries' },
  ];

  return (
    <section className="relative -mx-4 sm:-mx-6 md:-mx-8 min-h-[88svh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="RAVE Camp mentor leading an interactive youth session"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        <div className="absolute inset-0 bg-purple-950/25 mix-blend-multiply dark:bg-purple-950/35" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-full mb-10 backdrop-blur-md"
          >
            <Calendar className="w-5 h-5 text-pink-200" />
            <span className="text-sm sm:text-base font-semibold text-white">
              June 14-20, 2026 • Forthright Gardens Estate, Lagos-Ibadan Expressway
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white mb-8 leading-[0.95] drop-shadow-2xl"
          >
            R.A.V.E.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient">
              Camp
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 mb-6 tracking-tight"
          >
            Recharge • Adjust • Vibe • Engage
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed"
          >
            Real moments from Africa&apos;s premier youth leadership movement, where young leaders gather for learning, worship, connection, and transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 mb-14"
          >
            <Button
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-10 py-7 h-auto shadow-2xl shadow-purple-500/30 group"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-white/40 bg-white/10 text-white text-lg px-10 py-7 h-auto backdrop-blur-md hover:bg-white/20 hover:text-white"
            >
              View Gallery
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-white/75 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-pink-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
