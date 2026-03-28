import { motion } from 'motion/react';
import { Star, Award, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Sponsors() {
  const tiers = [
    {
      name: 'Platinum Sponsors',
      icon: Star,
      color: 'from-cyan-400 to-blue-400',
      sponsors: [
        { name: 'TechCorp Global', industry: 'Technology' },
        { name: 'Innovation Partners', industry: 'Venture Capital' },
      ],
    },
    {
      name: 'Gold Sponsors',
      icon: Award,
      color: 'from-yellow-400 to-orange-400',
      sponsors: [
        { name: 'Future Bank', industry: 'Financial Services' },
        { name: 'EduTech Solutions', industry: 'Education' },
        { name: 'Green Energy Co', industry: 'Sustainability' },
      ],
    },
    {
      name: 'Community Partners',
      icon: Heart,
      color: 'from-pink-400 to-rose-400',
      sponsors: [
        { name: 'Youth Leadership Network', industry: 'Non-Profit' },
        { name: 'African Entrepreneurs Forum', industry: 'Community' },
        { name: 'Skills Development Hub', industry: 'Education' },
        { name: 'Impact Collective', industry: 'Social Impact' },
      ],
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by organizations committed to developing Africa's next generation of leaders.
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                  <tier.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{tier.name}</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-8 hover:border-white/40 hover:from-white/15 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 mx-auto`}>
                      <span className="text-2xl font-black text-white">
                        {sponsor.name.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white text-center mb-2">{sponsor.name}</h4>
                    <p className="text-sm text-gray-400 text-center">{sponsor.industry}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-black text-white mb-4">
            Become a Sponsor
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to empower Africa's youth and amplify your brand's impact across 15+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Download Sponsorship Deck
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Contact Partnerships Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
