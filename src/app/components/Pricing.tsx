import { motion } from 'motion/react';
import { Check, Zap, Users, Crown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  const plans = [
    {
      name: 'Earlybird',
      icon: Zap,
      price: '₦120,000',
      deadline: 'Limited Early Offer',
      description: 'Early registration discount',
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
      name: 'Single',
      icon: Users,
      price: '₦150,000',
      deadline: 'Individual Registration',
      description: 'Standard single participant',
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
    {
      name: 'Group of 5',
      icon: Crown,
      price: '₦650,000',
      deadline: 'Group Registration (5+ people)',
      description: 'Save together with your group',
      features: [
        'Full 6-day camp access for 5 people',
        'All workshops & sessions',
        'Accommodation included',
        'Meals & refreshments',
        'Welcome kit & materials',
        'Certificate of completion',
        'Access to alumni network',
        'Group coordination support',
      ],
      popular: false,
      gradient: 'from-emerald-600 to-teal-600',
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

        <div className="mb-16 max-w-6xl mx-auto px-4">

          {/* MOBILE: Swipeable */}
          <div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`snap-center flex-shrink-0 w-[85%] relative bg-card border ${plan.popular
                  ? 'border-purple-500/50'
                  : 'border-border'
                  } rounded-3xl p-6 pt-10 hover:border-purple-500/30 transition-all duration-300 shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-foreground mb-3">
                  {plan.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-purple-500 font-semibold">
                    {plan.deadline}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToRegister}
                  className={`w-full h-12 text-sm font-bold ${plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-muted text-foreground'
                    }`}
                >
                  Select this Plan
                </Button>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP: Bigger Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative bg-card border ${plan.popular
                  ? 'border-purple-500/50 scale-105'
                  : 'border-border'
                  } rounded-3xl p-12 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold text-white shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-8`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black text-foreground mb-4">
                  {plan.name}
                </h3>

                <p className="text-base text-muted-foreground mb-8">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-6xl font-black text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-base text-purple-500 font-semibold">
                    {plan.deadline}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToRegister}
                  className={`w-full h-14 text-base font-bold ${plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-muted text-foreground'
                    }`}
                >
                  Select this Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}