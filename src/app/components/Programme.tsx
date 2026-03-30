import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Programme() {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [hoveredSession, setHoveredSession] = useState<number | null>(null);

  const schedule = {
    day1: {
      date: 'July 15, 2026',
      title: 'Opening & Orientation',
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Grand Opening Ceremony',
          speaker: 'Dr. Amara Okafor',
          location: 'Main Hall',
          type: 'Keynote',
        },
        {
          time: '11:00 - 12:30',
          title: 'Leadership in the Digital Age',
          speaker: 'Kwame Mensah',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '14:00 - 15:30',
          title: 'Breakout Sessions: Innovation Labs',
          speaker: 'Various Mentors',
          location: 'Innovation Hub',
          type: 'Interactive',
        },
        {
          time: '16:00 - 18:00',
          title: 'Networking & Welcome Reception',
          speaker: '',
          location: 'Rooftop Terrace',
          type: 'Social',
        },
      ],
    },
    day2: {
      date: 'July 16, 2026',
      title: 'Recharge & Wellness',
      sessions: [
        {
          time: '07:00 - 08:00',
          title: 'Morning Yoga & Meditation',
          speaker: 'Wellness Team',
          location: 'Garden',
          type: 'Wellness',
        },
        {
          time: '09:00 - 11:00',
          title: 'Mental Health & Peak Performance',
          speaker: 'Prof. Sarah Chen',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '11:30 - 13:00',
          title: 'Personal Branding Masterclass',
          speaker: 'Industry Experts',
          location: 'Conference Room A',
          type: 'Masterclass',
        },
        {
          time: '15:00 - 17:00',
          title: 'Wellness Activities & Sports',
          speaker: '',
          location: 'Sports Complex',
          type: 'Activity',
        },
      ],
    },
    day3: {
      date: 'July 17, 2026',
      title: 'Adjust & Strategy',
      sessions: [
        {
          time: '09:00 - 11:00',
          title: 'Strategic Planning Workshop',
          speaker: 'Business Leaders',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '11:30 - 13:00',
          title: '1-on-1 Mentorship Sessions',
          speaker: 'Assigned Mentors',
          location: 'Various Rooms',
          type: 'Mentorship',
        },
        {
          time: '14:00 - 16:00',
          title: 'Financial Literacy & Investment',
          speaker: 'Financial Experts',
          location: 'Conference Room B',
          type: 'Workshop',
        },
        {
          time: '16:30 - 18:00',
          title: 'Pitch Practice Sessions',
          speaker: '',
          location: 'Innovation Hub',
          type: 'Interactive',
        },
      ],
    },
    day4: {
      date: 'July 18, 2026',
      title: 'Vibe & Connect',
      sessions: [
        {
          time: '10:00 - 12:00',
          title: 'Cultural Exchange & Storytelling',
          speaker: 'Community Leaders',
          location: 'Main Hall',
          type: 'Interactive',
        },
        {
          time: '13:00 - 15:00',
          title: 'Creative Collaboration Projects',
          speaker: 'Team Facilitators',
          location: 'Innovation Hub',
          type: 'Project Work',
        },
        {
          time: '16:00 - 18:00',
          title: 'Industry Mixers by Track',
          speaker: '',
          location: 'Various Venues',
          type: 'Networking',
        },
        {
          time: '19:00 - 23:00',
          title: 'R.A.V.E. Night: Celebration',
          speaker: '',
          location: 'Main Venue',
          type: 'Social',
        },
      ],
    },
    day5: {
      date: 'July 19, 2026',
      title: 'Engage & Empower',
      sessions: [
        {
          time: '09:00 - 12:00',
          title: 'Community Impact Projects',
          speaker: 'Project Teams',
          location: 'Community Sites',
          type: 'Field Work',
        },
        {
          time: '14:00 - 16:00',
          title: 'Startup Pitch Competition',
          speaker: 'Judges Panel',
          location: 'Main Hall',
          type: 'Competition',
        },
        {
          time: '16:30 - 18:00',
          title: 'Leadership Challenges Finals',
          speaker: '',
          location: 'Sports Complex',
          type: 'Competition',
        },
      ],
    },
    day6: {
      date: 'July 20, 2026',
      title: 'Closing & Next Steps',
      sessions: [
        {
          time: '09:00 - 11:00',
          title: 'Reflection & Goal Setting',
          speaker: 'Facilitators',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '11:30 - 13:00',
          title: 'Awards & Recognition Ceremony',
          speaker: '',
          location: 'Main Hall',
          type: 'Ceremony',
        },
        {
          time: '14:00 - 16:00',
          title: 'Closing Keynote & Next Steps',
          speaker: 'Special Guest',
          location: 'Main Hall',
          type: 'Keynote',
        },
        {
          time: '16:30 - 18:00',
          title: 'Farewell Reception',
          speaker: '',
          location: 'Rooftop Terrace',
          type: 'Social',
        },
      ],
    },
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Keynote: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      Workshop: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      Interactive: 'bg-green-500/10 text-green-400 border-green-500/20',
      Social: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      Masterclass: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      Activity: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      Mentorship: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      'Project Work': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      Networking: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      Competition: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Field Work': 'bg-lime-500/10 text-lime-400 border-lime-500/20',
      Ceremony: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
      Wellness: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    };
    return colors[type] || 'bg-muted text-muted-foreground border-border';
  };

  return (
    <section id="programme" className="py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          id='slide'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight">
            6-Day Programme
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            An immersive journey through leadership, innovation, and transformation.
          </p>
        </motion.div>

        <Tabs defaultValue="day1" className="w-full" onValueChange={setSelectedDay}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-12 bg-muted/50 p-2 rounded-2xl h-auto gap-2">
            {Object.entries(schedule).map(([key, day]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-muted-foreground font-bold py-4 rounded-xl text-base"
              >
                Day {key.replace('day', '')}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(schedule).map(([key, day]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-12 text-center bg-card border border-border rounded-2xl p-8">
                    <div className="inline-flex items-center gap-3 text-purple-500 mb-3">
                      <Calendar className="w-6 h-6" />
                      <span className="text-xl font-bold">{day.date}</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-foreground">{day.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {day.sessions.map((session, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredSession(index)}
                        onMouseLeave={() => setHoveredSession(null)}
                        className={`bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 cursor-pointer ${hoveredSession === index ? 'scale-[1.02] shadow-2xl shadow-purple-500/10' : ''
                          }`}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                          <div className="flex items-center gap-4 lg:w-56 flex-shrink-0">
                            <Clock className="w-6 h-6 text-purple-500" />
                            <span className="text-lg font-bold text-foreground">{session.time}</span>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-4 mb-3">
                              <h4 className="text-2xl font-bold text-foreground">{session.title}</h4>
                              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${getTypeColor(session.type)}`}>
                                {session.type}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-6 text-base text-muted-foreground">
                              {session.speaker && <span className="font-medium">• {session.speaker}</span>}
                              <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {session.location}
                              </span>
                            </div>
                          </div>

                          <ChevronRight className={`w-6 h-6 text-purple-500 transition-transform duration-300 ${hoveredSession === index ? 'translate-x-2' : ''
                            }`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
