import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';
import bimpeImage from '../../assets/bimpe.jpeg';

export function Speakers() {
  const speakers = [
    {
      name: 'Dr. Amara Okafor',
      title: 'CEO, Tech Innovations Africa',
      expertise: 'Innovation & Entrepreneurship',
      image: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzMjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Kwame Mensah',
      title: 'Founder, Impact Ventures',
      expertise: 'Social Impact & Leadership',
      image: 'https://images.unsplash.com/photo-1645736593731-4eef033ac37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyNjExNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Sarah Chen',
      title: 'Head of Growth, Global Startups',
      expertise: 'Scaling & Strategy',
      image: 'https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDI4OTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Prof. John Adeyemi',
      title: 'Sustainability Expert',
      expertise: 'Climate & Development',
      image: 'https://images.unsplash.com/photo-1636293235717-7895bf07abc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBwcm9mZXNzaW9uYWxzJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NzQzNDI0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Coach Bimpe Enike',
      title: 'Leadership Coach',
      expertise: 'Personal Development',
      image: bimpeImage,
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Alex Onyia',
      title: 'Tech Entrepreneur',
      expertise: 'Product & Innovation',
      image: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzMjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Opeyemi Akintunde',
      title: 'Business Strategist',
      expertise: 'Scaling & Growth',
      image: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzMjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Samuel Maradesa',
      title: 'Finance Professional',
      expertise: 'Investment & Wealth',
      image: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzMjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      twitter: '#',
    },

  ];

  return (
    <section id="speakers" className="py-32 lg:py-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight">
            World-Class{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Speakers
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            Learn from industry leaders and visionaries shaping the future of Africa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    <a
                      href={speaker.linkedin}
                      className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={speaker.twitter}
                      className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">{speaker.name}</h3>
              <p className="text-base text-purple-500 mb-2 font-semibold">{speaker.title}</p>
              <p className="text-sm text-muted-foreground">{speaker.expertise}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-muted-foreground">
            + 25 more inspiring speakers and mentors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
