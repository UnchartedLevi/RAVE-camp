import { motion } from 'motion/react';
import bimpeImage from '../../assets/bimpe.jpeg';
import alexImage from '../../assets/alex.jpeg';
import opeImage from '../../assets/woman2.jpg';
import samImage from '../../assets/samueal.jpeg';

export function Speakers() {
  const speakers = [

    {
      name: 'Coach Bimpe Enike',
      title: 'Leadership Coach',
      expertise: 'Personal Development',
      image: bimpeImage,
      bio: 'Coach Bimpe Enike is a self-development coach, purity advocate, and writer based in Lagos, Nigeria. She is the founder of the Menders NGO and the Menders Antipoverty Foundation, focusing on leadership, etiquette, and overcoming challenges to achieve a fulfilled life.',
    },
    {
      name: 'Alex Onyia',
      title: 'Chief Executive Officer at Educare',
      expertise: 'Product & Innovation',
      image: alexImage,
      bio: 'Alex Onyia is a business executive currently serving as CEO at Educare, likely focused on education-related services or technology. As the top leader of the organization, he\'s responsible for driving strategy, growth, and overall direction of the company.',
    },
    // {
    //   name: 'Vector',
    //   title: 'Nigerian Rapper & Singer-Songwriter',
    //   expertise: 'Music & Creative Arts',
    //   image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1700000000/vector-speaker.jpg',
    //   bio: 'Vector is a acclaimed Nigerian rapper and singer-songwriter known for his sharp lyricism and versatile style. He brings a unique creative energy to RAVE Camp, inspiring young participants to find their voice and express themselves through the power of storytelling and the arts.',
    // },
    {
      name: 'Opeyemi Akintunde',
      title: 'Storyteller. Creative Writer & Filmmaker',
      expertise: 'Scaling & Growth',
      image: opeImage,
      bio: 'Opeyemi Akintunde is a creative professional and storyteller with a focus on filmmaking and written content. She creates impact-driven content aimed at entertaining and inspiring audiences on a global scale — blending artistry with a mission to make a meaningful difference.',
    },
    {
      name: 'Samuel Maradesa',
      title: 'Counsellor, Author, Speaker & Teacher',
      expertise: 'Investment & Wealth',
      image: samImage,
      bio: 'Samuel Maradesa is a multi-credentialed professional holding certifications in counselling (MCASSON), information systems auditing (CISA), and public administration (APA). He wears several hats as a counsellor, author, speaker, and teacher — suggesting a career centered around personal development, education, and advisory work.',
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-sm leading-relaxed text-center">
                    {speaker.bio}
                  </p>
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
            + more inspiring speakers and mentors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
