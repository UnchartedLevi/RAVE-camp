import { motion, useScroll, useTransform } from "motion/react";
import {
  Lightbulb,
  Users,
  Globe,
  Trophy,
  Cpu,
  CheckCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef } from "react";
import teen from '../../assets/teens1.jpg';
import teen1 from '../../assets/teens2.jpg';

export function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  const experiences = [
    {
      icon: Lightbulb,
      title: "Expert Guest Speakers",
      description: "Learn from successful leaders and industry pioneers",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Interactive Workshops",
      description:
        "Hands-on sessions covering leadership, tech, and life skills",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Model United Nations General Assembly",
      description:
        "Participate in global diplomacy and problem-solving exercises",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Trophy,
      title: "Team Competitions & Games",
      description: "Build camaraderie through exciting team challenges",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Cpu,
      title: "Robotics & Tech Exposure",
      description: "Explore cutting-edge technology and innovation",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 lg:py-40 bg-background relative overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <section id="raveExperience" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                <ImageWithFallback
                  src={teen}
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The R.A.V.E. Experience
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Six days of intensive learning, growth, and fun designed to
                transform your leadership journey.
              </p>

              <div className="space-y-5">
                {experiences.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      className="text-[#AF00F0] mt-1 flex-shrink-0"
                      size={22}
                    />

                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-black mb-3 leading-tight">
                {item.title}
              </h3>

              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 flex-shrink-0" />

                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] group"
        >
          <img
            src={teen1}
            alt="Camp experience"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-3">
                6 Days of Transformation
              </h3>

              <p className="text-xl lg:text-2xl text-gray-200">
                Join us in Forthright Gardens Estate, Lagos-Ibadan Expressway
                for an unforgettable experience
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}