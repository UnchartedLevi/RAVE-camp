import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Chioma Adebayo',
      role: 'Founder, EdTech Startup',
      country: 'Nigeria',
      image: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzMjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'R.A.V.E. Camp was a game-changer. The mentorship, connections, and skills I gained transformed my startup journey. I met my co-founder here!',
      rating: 5,
    },
    {
      name: 'Samuel Mwangi',
      role: 'Social Impact Leader',
      country: 'Kenya',
      image: 'https://images.unsplash.com/photo-1645736593731-4eef033ac37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyNjExNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The experience exceeded all expectations. From the speakers to the activities, everything was world-class. This is where Africa\'s future leaders are born.',
      rating: 5,
    },
    {
      name: 'Aisha Rahman',
      role: 'Climate Activist',
      country: 'Ghana',
      image: 'https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDI4OTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'I came as a participant and left as a changemaker. The camp gave me the confidence, network, and tools to launch my climate initiative across West Africa.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-300 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black dark:text-white mb-6">
            What Alumni Say
          </h2>
          <p className="text-xl text-slate-800 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from past participants who have gone on to create impact across Africa and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-100 border border-black/10 rounded-2xl p-8 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:hover:border-purple-500/50"
            >
              <Quote className="w-10 h-10 text-purple-500 dark:text-purple-400 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-500 dark:text-yellow-500 dark:fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
