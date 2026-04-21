
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Zap, Users, Crown, ArrowRight, Ticket, X } from "lucide-react";
import { Registration } from "./Registration.tsx";

export function Pricing() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const plans = [
    { name: "Earlybird", icon: Zap, price: "₦120,000", deadline: "Limited Early Offer", description: "Early registration discount", popular: true, gradient: "from-purple-600 to-pink-600", features: ["Full 6-day camp access","All workshops & sessions","Accommodation included","Meals & refreshments","Welcome kit & materials","Certificate of completion","Access to alumni network"] },
    { name: "Single", icon: Users, price: "₦150,000", deadline: "Individual Registration", description: "Standard single participant", popular: false, gradient: "from-blue-600 to-cyan-600", features: ["Full 6-day camp access","All workshops & sessions","Accommodation included","Meals & refreshments","Welcome kit & materials","Certificate of completion","Access to alumni network"] },
    { name: "Group of 5", icon: Crown, price: "₦650,000", deadline: "Group Registration (5+ people)", description: "Save together with your group", popular: false, gradient: "from-emerald-600 to-teal-600", features: ["Full 6-day camp access for 5 people","All workshops & sessions","Accommodation included","Meals & refreshments","Welcome kit & materials","Certificate of completion","Access to alumni network","Group coordination support"] },
  ];

  return (
    <>
      <section id="pricing" className="py-24 sm:py-28 lg:py-36 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4">Investment Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose the package that works best for you.</p>
          </div>

          <div className="grid xl:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-3xl border bg-card p-8 shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-5`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="text-4xl font-black my-4">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              <Ticket className="w-5 h-5" />
              Proceed to Payment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl bg-background border shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-muted hover:bg-muted/80"
              >
                <X className="w-5 h-5" />
              </button>

              <Registration />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

