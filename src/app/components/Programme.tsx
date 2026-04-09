import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Programme() {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [hoveredSession, setHoveredSession] = useState<number | null>(null);

  const schedule = {
    day1: {
      date: 'Sunday, June 14, 2026',
      title: 'Registration & Orientation',
      sessions: [
        {
          time: '16:00 - 18:00',
          title: 'Registration & Confirmation',
          speaker: '',
          location: 'Main Hall',
          type: 'Admin',
        },
        {
          time: '17:30 - 18:30',
          title: 'Camp Orientation Begins',
          speaker: '',
          location: 'Main Venue',
          type: 'Orientation',
        },
        {
          time: '20:00 - 20:30',
          title: 'Evening Prayer',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '20:30 - 21:30',
          title: 'Clan Meeting',
          speaker: '',
          location: 'Various Rooms',
          type: 'Interactive',
        },
      ],
    },
    day2: {
      date: 'Monday, June 15, 2026',
      title: 'Knowing Yourself',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 06:30',
          title: 'Morning Aerobics (Jogging / Cross Country)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Admin',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '08:30 - 09:00',
          title: 'Bible Study',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '09:00 - 12:00',
          title: 'SESSION 1: Knowing Yourself',
          speaker: '',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '12:00 - 13:30',
          title: 'SESSION 2: Overcoming Addiction',
          speaker: '',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '11:00 - 11:30',
          title: 'Tea Break & Team Bonding Activity',
          speaker: '',
          location: 'Lounge',
          type: 'Activity',
        },
        {
          time: '14:00 - 17:00',
          title: 'Arena Games & Team Football',
          speaker: '',
          location: 'Sports Arena',
          type: 'Activity',
        },
        {
          time: '17:30 - 18:30',
          title: 'Debate Panel Discussion Starts',
          speaker: '',
          location: 'Main Hall',
          type: 'Interactive',
        },
        {
          time: '20:00 - 21:00',
          title: 'Movie Night',
          speaker: '',
          location: 'Main Venue',
          type: 'Social',
        },
      ],
    },
    day3: {
      date: 'Tuesday, June 16, 2026',
      title: 'Goal Setting & Decision Making',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 06:30',
          title: 'Morning Aerobics (Stretching)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Admin',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '08:30 - 09:00',
          title: 'Bible Study',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '09:00 - 12:00',
          title: 'Departure to UN General Assembly Venue',
          speaker: '',
          location: 'UN Assembly Hall',
          type: 'Field Trip',
        },
        {
          time: '11:00 - 12:00',
          title: 'Tea Break',
          speaker: '',
          location: 'UN Venue',
          type: 'Meals',
        },
        {
          time: '12:00 - 13:30',
          title: 'SESSION 2: Decision Making & Communication',
          speaker: '',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '14:00 - 15:30',
          title: 'Return & Lunch',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '16:00 - 18:00',
          title: 'Arena Games & Treasure Hunt',
          speaker: '',
          location: 'Sports Arena',
          type: 'Activity',
        },
        {
          time: '17:30 - 20:00',
          title: 'Panel Discussion',
          speaker: '',
          location: 'Main Hall',
          type: 'Interactive',
        },
        {
          time: '20:00 - 21:30',
          title: 'Variety Night',
          speaker: '',
          location: 'Main Venue',
          type: 'Social',
        },
      ],
    },
    day4: {
      date: 'Wednesday, June 17, 2026',
      title: 'Communication & Community Service',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 06:30',
          title: 'Morning Aerobics (Stretching)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Admin',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '08:30 - 09:00',
          title: 'Bible Study',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '09:00 - 11:00',
          title: 'Departure for Community Service',
          speaker: '',
          location: 'Community Sites',
          type: 'Field Work',
        },
        {
          time: '11:00 - 12:00',
          title: 'Tea Break',
          speaker: '',
          location: 'Community Site',
          type: 'Meals',
        },
        {
          time: '12:00 - 14:00',
          title: 'SESSION 2: Parents Session',
          speaker: 'Parents/Guardians',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '14:00 - 15:00',
          title: 'Return & Lunch',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '16:00 - 18:00',
          title: 'Arena Games',
          speaker: '',
          location: 'Sports Arena',
          type: 'Activity',
        },
        {
          time: '19:00 - 23:00',
          title: 'Black Tie Dinner & Award Night',
          speaker: '',
          location: 'Main Hall',
          type: 'Social',
        },
      ],
    },
    day5: {
      date: 'Thursday, June 18, 2026',
      title: 'Drug Awareness & Celebration',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 06:30',
          title: 'Morning Aerobics (Stretching)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Admin',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '08:30 - 09:00',
          title: 'Bible Study',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '09:00 - 11:00',
          title: 'Community Service Outing Planning',
          speaker: '',
          location: 'Conference Room',
          type: 'Workshop',
        },
        {
          time: '11:00 - 11:30',
          title: 'Departure for Community Service',
          speaker: '',
          location: 'Community Sites',
          type: 'Field Work',
        },
        {
          time: '12:00 - 14:00',
          title: 'Lunch',
          speaker: '',
          location: 'Community Site',
          type: 'Meals',
        },
        {
          time: '16:00 - 18:00',
          title: 'Coding / Portfolio / Robotics Arena Games',
          speaker: '',
          location: 'Innovation Hub',
          type: 'Activity',
        },
        {
          time: '19:00 - 20:00',
          title: 'Dinner',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '20:00 - 21:00',
          title: 'Bonfire Night',
          speaker: '',
          location: 'Outdoor',
          type: 'Social',
        },
      ],
    },
    day6: {
      date: 'Friday, June 19, 2026',
      title: 'Panel Discussion & Recognition',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 06:30',
          title: 'Morning Aerobics (Stretching)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Admin',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '08:30 - 09:00',
          title: 'Bible Study',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '09:00 - 11:00',
          title: 'SESSION 1: Panel Discussion - Drug Abuse (Teen Panelists)',
          speaker: 'Teen Panelists',
          location: 'Main Hall',
          type: 'Panel',
        },
        {
          time: '11:00 - 12:00',
          title: 'Tea Break',
          speaker: '',
          location: 'Lounge',
          type: 'Meals',
        },
        {
          time: '12:00 - 14:00',
          title: 'UN Assembly Practice & Lunch',
          speaker: '',
          location: 'Main Hall',
          type: 'Workshop',
        },
        {
          time: '16:00 - 18:00',
          title: 'Arena Games',
          speaker: '',
          location: 'Sports Arena',
          type: 'Activity',
        },
        {
          time: '19:00 - 20:00',
          title: 'Dinner',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
      ],
    },
    day7: {
      date: 'Saturday, June 20, 2026',
      title: 'Reflection & Departure',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 06:30',
          title: 'Morning Aerobics (Stretching)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Admin',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '08:30 - 09:00',
          title: 'Bible Study',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '16:00 - 18:00',
          title: 'Back to Dorm & Award Night',
          speaker: '',
          location: 'Main Hall',
          type: 'Ceremony',
        },
        {
          time: '19:00 - 20:00',
          title: 'Dinner',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '20:00 - 21:00',
          title: 'Reflection & Diary Session',
          speaker: '',
          location: 'Main Hall',
          type: 'Interactive',
        },
        {
          time: '21:00 - 22:30',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
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
      'Field Trip': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      Ceremony: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
      Wellness: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      Spiritual: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      Orientation: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      Admin: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      Meals: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      Panel: 'bg-red-500/10 text-red-400 border-red-500/20',
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
            7-Day Programme
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            A transformative journey through leadership, personal development, and community engagement.
          </p>
        </motion.div>

        <Tabs defaultValue="day1" className="w-full" onValueChange={setSelectedDay}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 mb-12 bg-muted/50 p-2 rounded-2xl h-auto gap-2">
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
