import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import bimpeImage from '../../assets/bimpe.jpeg';
import alexImage from '../../assets/alex.jpeg';
import samImage from '../../assets/samueal.jpeg';

const nagaImage = 'https://res.cloudinary.com/dmbnhcogr/image/upload/v1781609046/pivn5bla4tz1t0knc9g7.png';
const lajuImage = 'https://res.cloudinary.com/dmbnhcogr/image/upload/v1781609046/k0nw8blodugcw3ixg0hu.png';

type Speaker = {
  name: string;
  title: string;
  about: string;
  image?: string;
  imagePath?: string;
  initials: string;
};

const speakers: Speaker[] = [
  {
    name: 'Coach Bimpe Enike',
    title: 'Leadership Coach',
    about: 'Equips young people with practical leadership, etiquette, and personal growth principles for purposeful living.',
    image: bimpeImage,
    initials: 'BE',
  },
  {
    name: 'Mr. Alex Onyia',
    title: 'CEO, Educare',
    about: 'Leads conversations on education innovation, opportunity, and building systems that help young people thrive.',
    image: alexImage,
    initials: 'AO',
  },
  {
    name: 'Pastor Naga Igbinoba',
    title: 'Prominent Minister',
    about: 'Brings a strong message of faith, conviction, discipline, and purpose for the next generation.',
    image: nagaImage,
    initials: 'NI',
  },
  {
    name: 'Pst Laju Iren',
    title: 'Award Winning Writer, Film Maker',
    about: 'Inspires creative courage through storytelling, writing, film, media, and faith-driven influence.',
    image: lajuImage,
    initials: 'LI',
  },
  {
    name: 'Mr. Samuel Maradesa',
    title: 'Counsellor, Author, Speaker',
    about: 'Guides young people with counselling insight, confidence building, emotional clarity, and life direction.',
    image: samImage,
    initials: 'SM',
  },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative overflow-hidden bg-[#090313] py-28 text-white lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(170,0,255,0.32),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(178,255,0,0.24),transparent_24%),linear-gradient(135deg,#090313_0%,#150627_55%,#070d05_100%)]" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(190,255,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(185,52,255,0.16)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent" />

      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-lime-200 shadow-[0_0_34px_rgba(190,255,0,0.18)]">
              <Sparkles className="h-4 w-4" />
              Speaker Lineup
            </div>
            <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              RAVE Camp{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-white to-fuchsia-400">
                Voices
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:ml-auto">
            The featured minds from the campaign: leadership, education, ministry, film, writing, counselling, and purpose-driven mentorship.
          </p>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18072c]/10 to-[#090313]" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-300 via-fuchsia-400 to-purple-500" />

              <div className="relative h-80 overflow-hidden bg-[#120521]">
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover saturate-125 transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div
                    data-needed-image={speaker.imagePath}
                    className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_18%,rgba(190,255,0,0.32),transparent_35%),linear-gradient(145deg,#1d0737,#090313_58%,#142200)]"
                  >
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-lime-300/45 bg-black/35 text-4xl font-black text-lime-200 shadow-[0_0_48px_rgba(190,255,0,0.25)]">
                      {speaker.initials}
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#090313] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end bg-black/72 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-semibold leading-relaxed text-white">
                    {speaker.about}
                  </p>
                </div>
              </div>

              <div className="relative p-5">
                <h3 className="text-2xl font-black leading-tight text-white">
                  {speaker.name}
                </h3>
                <p className="mt-3 text-sm font-bold leading-snug text-lime-200">
                  {speaker.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
