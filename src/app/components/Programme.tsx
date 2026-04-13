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
          type: 'Admin',
        },
        {
          time: '18:00 - 19:00',
          title: 'Camp Orientation',
          speaker: '',
          location: 'Main Venue',
          type: 'Admin',
        },
        {
          time: '19:00 - 20:00',
          title: 'Dinner',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '20:00 - 20:30',
          title: 'Settle Into Rooms',
          speaker: '',
          location: 'Dormitories',
          type: 'Admin',
        },
        {
          time: '20:30 - 21:30',
          title: 'Clan Meeting',
          speaker: '',
          location: 'Various Rooms',
          type: 'Admin',
        },
        {
          time: '22:30 - 23:00',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
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
          time: '06:00 - 07:00',
          title: 'Morning Aerobics (Samba)',
          speaker: '',
          location: 'Sports Complex',
          type: 'Wellness',
        },
        {
          time: '07:00 - 08:00',
          title: 'Body Grooming & Hygiene',
          speaker: '',
          location: 'Facilities',
          type: 'Wellness',
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
          title: 'SESSION 1: Knowing Yourself',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '11:00 - 11:30',
          title: 'Tea Break',
          speaker: '',
          location: 'Lounge',
          type: 'Meals',
        },
        {
          time: '11:30 - 12:00',
          title: 'Team Bonding Activity',
          speaker: '',
          location: 'Lounge',
          type: 'Fun & Activities',
        },
        {
          time: '12:00 - 14:00',
          title: 'SESSION 2: Overcoming Addiction',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '14:00 - 15:00',
          title: 'Lunch',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '15:00 - 16:00',
          title: 'Siesta',
          speaker: '',
          location: 'Dormitories',
          type: 'Wellness',
        },
        {
          time: '16:00 - 17:00',
          title: 'Arena Games / Team Football',
          speaker: '',
          location: 'Sports Arena',
          type: 'Fun & Activities',
        },
        {
          time: '17:00 - 18:00',
          title: 'Debate',
          speaker: '',
          location: 'Main Hall',
          type: 'Fun & Activities',
        },
        {
          time: '18:00 - 19:00',
          title: 'Group Meeting',
          speaker: '',
          location: 'Various Rooms',
          type: 'Admin',
        },
        {
          time: '19:00 - 20:00',
          title: 'Dinner',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
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
          title: 'Reflection & Diary Session',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '22:30 - 23:00',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
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
          time: '06:00 - 07:00',
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
          type: 'Wellness',
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
          title: 'SESSION 1: Goal Setting & Time Management',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '11:00 - 11:30',
          title: 'Tea Break',
          speaker: '',
          location: 'Lounge',
          type: 'Meals',
        },
        {
          time: '12:00 - 16:00',
          title: 'SESSION 2: Decision Making & Communication',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '16:00 - 17:00',
          title: 'Arena Games / Treasure Hunt',
          speaker: '',
          location: 'Sports Arena',
          type: 'Fun & Activities',
        },
        {
          time: '17:00 - 18:00',
          title: 'Panel Discussion Starts',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '18:00 - 19:00',
          title: 'Panel Discussion Ends / UN Assembly Practice',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '19:00 - 20:00',
          title: 'UN Assembly Practice & Dinner',
          speaker: '',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '20:00 - 21:30',
          title: 'Movie Night',
          speaker: '',
          location: 'Main Venue',
          type: 'Fun & Activities',
        },
        {
          time: '22:30 - 23:00',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
        },
      ],
    },
    day4: {
      date: 'Wednesday, June 17, 2026',
      title: 'UN General Assembly Experience',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 07:00',
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
          type: 'Wellness',
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
          time: '09:00 - 18:00',
          title: 'Departure to UN General Assembly Venue',
          speaker: '',
          location: 'UN Assembly Hall',
          type: 'Field Trips',
        },
        {
          time: '18:00 - 19:00',
          title: 'Return from UN / Group Meeting',
          speaker: '',
          location: 'Main Venue',
          type: 'Field Trips',
        },
        {
          time: '19:00 - 20:00',
          title: 'Dinner',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '20:00 - 21:30',
          title: 'Variety Night',
          speaker: '',
          location: 'Main Venue',
          type: 'Fun & Activities',
        },
        {
          time: '22:30 - 23:00',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
        },
      ],
    },
    day5: {
      date: 'Thursday, June 18, 2026',
      title: 'Community Service & Innovation',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 07:00',
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
          type: 'Wellness',
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
          type: 'Admin',
        },
        {
          time: '11:00 - 14:00',
          title: 'Departure for Community Service',
          speaker: '',
          location: 'Community Sites',
          type: 'Field Trips',
        },
        {
          time: '14:00 - 15:00',
          title: 'Return & Lunch',
          speaker: '',
          location: 'Dining Hall',
          type: 'Field Trips',
        },
        {
          time: '15:00 - 16:00',
          title: 'Siesta',
          speaker: '',
          location: 'Dormitories',
          type: 'Wellness',
        },
        {
          time: '16:00 - 18:00',
          title: 'Coding / Portfolio / Robotics',
          speaker: '',
          location: 'Innovation Hub',
          type: 'Sessions',
        },
        {
          time: '18:00 - 19:00',
          title: 'Diary Session',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '19:00 - 21:30',
          title: 'Bonfire Night',
          speaker: '',
          location: 'Outdoor',
          type: 'Fun & Activities',
        },
        {
          time: '22:30 - 23:00',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
        },
      ],
    },
    day6: {
      date: 'Friday, June 19, 2026',
      title: 'Panel Discussions & Recognition',
      sessions: [
        {
          time: '05:30 - 06:00',
          title: 'Morning Devotion',
          speaker: '',
          location: 'Main Hall',
          type: 'Spiritual',
        },
        {
          time: '06:00 - 07:00',
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
          type: 'Wellness',
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
          type: 'Sessions',
        },
        {
          time: '11:00 - 11:30',
          title: 'Tea Break',
          speaker: '',
          location: 'Lounge',
          type: 'Meals',
        },
        {
          time: '12:00 - 14:00',
          title: 'SESSION 2: Parents Session',
          speaker: 'Parents/Guardians',
          location: 'Main Hall',
          type: 'Sessions',
        },
        {
          time: '14:00 - 15:00',
          title: 'Lunch',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '15:00 - 16:00',
          title: 'Siesta',
          speaker: '',
          location: 'Dormitories',
          type: 'Wellness',
        },
        {
          time: '16:00 - 17:00',
          title: 'Arena Games',
          speaker: '',
          location: 'Sports Arena',
          type: 'Fun & Activities',
        },
        {
          time: '17:00 - 21:30',
          title: 'Black Tie Dinner & Award Night',
          speaker: '',
          location: 'Main Hall',
          type: 'Fun & Activities',
        },
        {
          time: '22:30 - 23:00',
          title: 'Lights Out',
          speaker: '',
          location: 'All Areas',
          type: 'Admin',
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
          time: '06:00 - 07:00',
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
          type: 'Wellness',
        },
        {
          time: '08:00 - 08:30',
          title: 'Breakfast',
          speaker: '',
          location: 'Dining Hall',
          type: 'Meals',
        },
        {
          time: '12:00 - 13:00',
          title: 'DEPARTURE',
          speaker: '',
          location: 'Main Venue',
          type: 'Admin',
        },
      ],
    },
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Spiritual: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      Wellness: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      Meals: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      Sessions: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Fun & Activities': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'Field Trips': 'bg-lime-500/10 text-lime-400 border-lime-500/20',
      Admin: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
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
                            <Clock className="w-5 h-5 text-purple-500" />
                            <span className="text-sm sm:text-base lg:text-lg font-bold text-foreground">{session.time}</span>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-4 mb-3">
                              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{session.title}</h4>
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
