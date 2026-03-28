import { motion } from 'motion/react';
import { Check, Zap, Users, Crown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  const plans = [
    {
      name: 'Early Bird',
      icon: Zap,
      price: '₦450,000',
      originalPrice: '₦750,000',
      deadline: 'Until May 1, 2026',
      description: 'Perfect for individual participants',
      features: [
        'Full 6-day camp access',
        'All workshops & sessions',
        'Accommodation included',
        'Meals & refreshments',
        'Welcome kit & materials',
        'Certificate of completion',
        'Access to alumni network',
      ],
      popular: true,
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Standard',
      icon: Users,
      price: '₦600,000',
      originalPrice: '',
      deadline: 'May 2 - June 30, 2026',
      description: 'Join the movement',
      features: [
        'Full 6-day camp access',
        'All workshops & sessions',
        'Accommodation included',
        'Meals & refreshments',
        'Welcome kit & materials',
        'Certificate of completion',
        'Access to alumni network',
      ],
      popular: false,
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight">
            Investment Options
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-6">
            Choose the plan that works best. All packages include full camp access.
          </p>
          <p className="text-base text-purple-500 font-semibold">
            💳 Credit Card • Bank Transfer • Mobile Money
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative bg-card border ${
                plan.popular ? 'border-purple-500/50 scale-105' : 'border-border'
              } rounded-3xl p-10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-black text-foreground mb-3">{plan.name}</h3>
              <p className="text-base text-muted-foreground mb-8">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl font-black text-foreground">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">{plan.originalPrice}</span>
                  )}
                </div>
                <p className="text-base text-purple-500 font-semibold">{plan.deadline}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToRegister}
                className={`w-full h-14 text-base font-bold ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Scholarship Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-3xl p-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-base font-semibold text-foreground">Financial Support Available</span>
          </div>
          <h3 className="text-3xl font-black text-foreground mb-4">Need Financial Support?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer partial and full scholarships for exceptional candidates. Limited spots available.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8"
          >
            Apply for Scholarship
          </Button>
        </motion.div>
      </div>
    </section>
  );
}