import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Medal, Trophy } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function LiveFeatures() {
  const [activeTab, setActiveTab] = useState('updates');
  const categoryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updates = [
    {
      time: 'Day 1',
      title: 'RAVE Camp Day 1 Results Are Live',
      content: 'Scores are now available for Rave Rangers, Storm Kidz, and Purple Raven across the Day 1 categories.',
      type: 'camp update',
    },
  ];

  const showResultsSequence = () => {
    if (categoryTimer.current) {
      clearTimeout(categoryTimer.current);
    }

    setActiveTab('leaderboard');
    categoryTimer.current = setTimeout(() => {
      setActiveTab('categories');
    }, 3500);
  };

  const handleTabChange = (value: string) => {
    if (categoryTimer.current) {
      clearTimeout(categoryTimer.current);
      categoryTimer.current = null;
    }

    setActiveTab(value);
  };

  useEffect(() => {
    return () => {
      if (categoryTimer.current) {
        clearTimeout(categoryTimer.current);
      }
    };
  }, []);

  const teams = [
    { team: 'Storm Kidz', points: 100 },
    { team: 'Purple Raven', points: 87 },
    { team: 'Rave Rangers', points: 77 },
  ];

  const categories = [
    {
      name: 'Table Etiquette - Round 1',
      scores: [
        { team: 'Rave Rangers', points: -7 },
        { team: 'Storm Kidz', points: 1 },
        { team: 'Purple Raven', points: 2 },
      ],
    },
    {
      name: 'Debate',
      scores: [
        { team: 'Rave Rangers', points: 60 },
        { team: 'Storm Kidz', points: 79 },
        { team: 'Purple Raven', points: 64 },
      ],
    },
    {
      name: 'Football',
      scores: [
        { team: 'Rave Rangers', points: 4 },
        { team: 'Storm Kidz', points: 5 },
        { team: 'Purple Raven', points: 6 },
      ],
    },
    {
      name: 'Table Etiquette - Round 2',
      scores: [
        { team: 'Rave Rangers', points: 20 },
        { team: 'Storm Kidz', points: 15 },
        { team: 'Purple Raven', points: 15 },
      ],
    },
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
              Results
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            RAVE Camp Day 1 updates, team standings, and category scores.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
              value="categories"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-muted-foreground font-bold py-2 sm:py-4 rounded-xl text-xs sm:text-base"
            >
              <Medal className="w-3 h-3 sm:w-4 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Categories</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="updates">
            <div className="space-y-6">
              {updates.map((update, index) => (
                <motion.button
                  type="button"
                  key={index}
                  onClick={showResultsSequence}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="w-full text-left bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/30 transition-all duration-300"
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
                </motion.button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-10">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Trophy className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                <h3 className="text-2xl sm:text-3xl font-black text-foreground">Day 1 Team Rankings</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {teams.map((team, index) => (
                  <motion.div
                    key={team.team}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center gap-3 sm:gap-6 p-3 sm:p-6 rounded-2xl ${index === 0
                      ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50'
                      : 'bg-muted/50'
                      }`}
                  >
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-lg sm:text-xl ${index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                        'bg-amber-700 text-white'
                      }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-xl font-bold text-foreground truncate">{team.team}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">{team.points} points</p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-purple-500 flex-shrink-0">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-bold text-sm sm:text-lg">Day 1</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="categories">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Medal className="w-8 h-8 text-purple-500" />
                <h3 className="text-3xl font-black text-foreground">Category Scores</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-10">
                Day 1 scores for the three camp teams under each scored category.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-muted/40 border border-border rounded-2xl p-5 sm:p-6"
                  >
                    <h4 className="text-xl font-black text-foreground mb-5">{category.name}</h4>
                    <div className="space-y-3">
                      {category.scores.map((score) => (
                        <div
                          key={`${category.name}-${score.team}`}
                          className="flex items-center justify-between gap-4 rounded-xl bg-background/60 px-4 py-3"
                        >
                          <span className="font-bold text-foreground">{score.team}</span>
                          <span className="text-lg font-black text-purple-500">{score.points}</span>
                        </div>
                      ))}
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
