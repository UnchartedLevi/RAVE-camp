import { motion } from 'motion/react';
import { TrendingUp, Trophy, Globe, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function LiveFeatures() {
  const updates = [
    {
      time: '2 hours ago',
      title: 'Day 3 Workshops Announced',
      content: 'Strategic Planning & Financial Literacy sessions now open for registration.',
      type: 'announcement',
    },
    {
      time: '5 hours ago',
      title: 'New Speaker Added',
      content: 'Welcome Prof. Sarah Chen - Head of Growth at Global Startups!',
      type: 'speaker',
    },
    {
      time: '1 day ago',
      title: 'Early Bird Extended',
      content: 'Due to popular demand, early bird pricing extended to May 1st!',
      type: 'pricing',
    },
    {
      time: '2 days ago',
      title: '200+ Registrations',
      content: 'We\'ve crossed 200 registrations! Limited spots remaining.',
      type: 'milestone',
    },
  ];

  const leaderboard = [
    { rank: 1, team: 'InnovatorsHub', points: 2450, trend: '+150' },
    { rank: 2, team: 'Future Leaders Collective', points: 2380, trend: '+120' },
    { rank: 3, team: 'Impact Warriors', points: 2210, trend: '+180' },
    { rank: 4, team: 'Tech Pioneers', points: 2100, trend: '+95' },
    { rank: 5, team: 'Change Makers Alliance', points: 1980, trend: '+110' },
  ];

  const sdgProgress = [
    { goal: 'SDG 4: Quality Education', progress: 78, color: 'bg-red-500' },
    { goal: 'SDG 8: Decent Work', progress: 65, color: 'bg-purple-500' },
    { goal: 'SDG 9: Innovation', progress: 82, color: 'bg-orange-500' },
    { goal: 'SDG 10: Reduced Inequalities', progress: 71, color: 'bg-pink-500' },
    { goal: 'SDG 17: Partnerships', progress: 88, color: 'bg-blue-500' },
  ];

  return (
    <section className="py-32 lg:py-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-8 tracking-tight">
            Live{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Updates
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            Real-time updates, team performance, and our impact on UN SDGs.
          </p>
        </motion.div>

        <Tabs defaultValue="updates" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/50 p-2 rounded-2xl h-auto gap-1 sm:gap-2">
            <TabsTrigger
              value="updates"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-muted-foreground font-bold py-2 sm:py-4 rounded-xl text-xs sm:text-base"
            >
              <Clock className="w-3 h-3 sm:w-4 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Updates</span>
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-muted-foreground font-bold py-2 sm:py-4 rounded-xl text-xs sm:text-base"
            >
              <Trophy className="w-3 h-3 sm:w-4 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Leaderboard</span>
            </TabsTrigger>
            <TabsTrigger
              value="sdg"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-muted-foreground font-bold py-2 sm:py-4 rounded-xl text-xs sm:text-base"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">UN SDGs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="updates">
            <div className="space-y-6">
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20">
                          {update.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{update.time}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{update.title}</h3>
                      <p className="text-lg text-muted-foreground">{update.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <h3 className="text-3xl font-black text-foreground">Team Rankings</h3>
              </div>
              <div className="space-y-4">
                {leaderboard.map((team, index) => (
                  <motion.div
                    key={team.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center gap-6 p-6 rounded-2xl ${team.rank === 1
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50'
                        : 'bg-muted/50'
                      }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl ${team.rank === 1 ? 'bg-yellow-500 text-black' :
                        team.rank === 2 ? 'bg-gray-400 text-black' :
                          team.rank === 3 ? 'bg-amber-700 text-white' :
                            'bg-muted text-foreground'
                      }`}>
                      {team.rank}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground">{team.team}</h4>
                      <p className="text-base text-muted-foreground">{team.points} points</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-bold text-lg">{team.trend}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sdg">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-500" />
                <h3 className="text-3xl font-black text-foreground">UN SDG Alignment</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-10">
                R.A.V.E. Camp projects contribute to the United Nations Sustainable Development Goals
              </p>
              <div className="space-y-8">
                {sdgProgress.map((sdg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-foreground font-bold text-lg">{sdg.goal}</span>
                      <span className="text-muted-foreground font-bold text-xl">{sdg.progress}%</span>
                    </div>
                    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sdg.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full ${sdg.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}