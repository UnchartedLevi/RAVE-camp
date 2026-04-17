import { motion } from "motion/react";
import { Check, Zap, Users, Crown, ArrowRight, Ticket } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Earlybird",
      icon: Zap,
      price: "₦120,000",
      deadline: "Limited Early Offer",
      description: "Early registration discount",
      features: [
        "Full 6-day camp access",
        "All workshops & sessions",
        "Accommodation included",
        "Meals & refreshments",
        "Welcome kit & materials",
        "Certificate of completion",
        "Access to alumni network",
      ],
      popular: true,
      gradient: "from-purple-600 to-pink-600",
    },
    {
      name: "Single",
      icon: Users,
      price: "₦150,000",
      deadline: "Individual Registration",
      description: "Standard single participant",
      features: [
        "Full 6-day camp access",
        "All workshops & sessions",
        "Accommodation included",
        "Meals & refreshments",
        "Welcome kit & materials",
        "Certificate of completion",
        "Access to alumni network",
      ],
      popular: false,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      name: "Group of 5",
      icon: Crown,
      price: "₦650,000",
      deadline: "Group Registration (5+ people)",
      description: "Save together with your group",
      features: [
        "Full 6-day camp access for 5 people",
        "All workshops & sessions",
        "Accommodation included",
        "Meals & refreshments",
        "Welcome kit & materials",
        "Certificate of completion",
        "Access to alumni network",
        "Group coordination support",
      ],
      popular: false,
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 sm:py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-18 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-5">
            Investment Options
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Choose the package that works best for you. Every plan includes full
            camp access and premium experience benefits.
          </p>

          <p className="text-sm sm:text-base text-purple-500 font-semibold">
            💳 Credit Card • Bank Transfer • Mobile Money
          </p>
        </motion.div>

        {/* MOBILE + TABLET CAROUSEL */}
        <div className="xl:hidden">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scrollbar-hide">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`snap-center shrink-0 w-[88%] sm:w-[70%] md:w-[48%] lg:w-[42%]
                  relative rounded-3xl border bg-card p-6 sm:p-7 shadow-lg transition-all duration-300
                  ${plan.popular
                    ? "border-purple-500/50 shadow-purple-500/10"
                    : "border-border"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-5`}
                >
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black mb-2">
                  {plan.name}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-5">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-3xl sm:text-4xl font-black">
                    {plan.price}
                  </p>
                  <p className="text-sm text-purple-500 font-semibold mt-1">
                    {plan.deadline}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LARGE SCREEN GRID */}
        <div className="hidden xl:grid grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border bg-card p-10 2xl:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl ${plan.popular
                  ? "border-purple-500/50 hover:shadow-purple-500/10"
                  : "border-border"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-7`}
              >
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-black mb-3">{plan.name}</h3>

              <p className="text-base text-muted-foreground mb-7">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-5xl 2xl:text-6xl font-black">
                  {plan.price}
                </p>
                <p className="text-sm text-purple-500 font-semibold mt-2">
                  {plan.deadline}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* PROCEED TO PAYMENT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 sm:mt-16 lg:mt-20 flex justify-center"
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-purple-500/30 bg-card p-8 sm:p-10 shadow-2xl shadow-purple-500/10 text-center overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 pointer-events-none rounded-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-purple-500/30">
                <Ticket className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
                Ready to Secure Your Spot?
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground mb-7 max-w-md mx-auto">
                Tickets are limited. Click below to complete your purchase
                securely via our ticketing platform and lock in your chosen plan.
              </p>

              {/* CTA Button */}
              <a
                href="#"
                // replace href="#" with your Tix.to link when ready
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Ticket className="w-5 h-5" />
                Proceed to Payment
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-xs text-muted-foreground mt-5 opacity-70">
                🔒 Secure checkout · Instant confirmation · All plans available
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}