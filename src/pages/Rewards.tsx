
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Crown, Medal, Sparkles, Trophy } from 'lucide-react';

const leaderboardData = Array.from({ length: 100 }, (_, i) => ({
  rank: i + 1,
  username: `User${(Math.random() + 1).toString(36).substring(2, 8)}`,
  points: Math.floor(10000 - (i * (9000 / 100)) + Math.random() * 100),
  isActive: Math.random() > 0.7,
})).sort((a, b) => b.points - a.points);

const galleryImages = [
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1645438818085-03a7b7f3b2a6?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639762681689-17322e66490b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639322537533-eb8bf1a21eef?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639322538895-aa8b58fd0cc4?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639322537174-6e44549ffc49?q=80&w=400&auto=format&fit=crop",
];

const Rewards = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center mb-4 transition-colors">
              <ArrowLeft size={16} className="mr-1" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">
              Stellar <span className="text-gradient">Rewards</span>
            </h1>
          </div>
          
          <Button className="bg-gradient-to-r from-stellar-purple to-stellar-blue text-white px-6 py-2 text-lg flex items-center gap-2 rounded-xl hover:opacity-90 transition-opacity">
            <Sparkles size={18} />
            Connect to Earn
          </Button>
        </div>
        
        <div className="mb-12 glass-morphism p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">About Stellar Rewards</h2>
          <p className="text-gray-300 mb-6">
            Stellar Rewards is our innovative point-based system designed to recognize and incentivize community participation. 
            Engage with our ecosystem, complete challenges, and climb the leaderboard to earn exclusive benefits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl">
              <Trophy className="h-10 w-10 text-stellar-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Contests</h3>
              <p className="text-gray-400">Participate in weekly challenges and earn points for the leaderboard.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Medal className="h-10 w-10 text-stellar-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Achievement Badges</h3>
              <p className="text-gray-400">Unlock special badges by completing specific milestones and tasks.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Crown className="h-10 w-10 text-stellar-pink mb-4" />
              <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
              <p className="text-gray-400">Top leaderboard members get early access to new features and events.</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="leaderboard" className="flex-1">Leaderboard</TabsTrigger>
            <TabsTrigger value="gallery" className="flex-1">Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaderboard" className="mt-0">
            <div className="glass-morphism rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Top 100 Leaderboard</h2>
                <div className="text-sm text-gray-400">
                  Last updated: April 11, 2025
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left">Rank</th>
                      <th className="px-6 py-4 text-left">Username</th>
                      <th className="px-6 py-4 text-right">Points</th>
                      <th className="px-6 py-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((user, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                          index < 3 ? 'bg-white/5' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          {index < 3 ? (
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-stellar-purple to-stellar-blue text-white font-bold">
                              {user.rank}
                            </div>
                          ) : (
                            <span className="text-gray-400">{user.rank}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 font-medium">{user.username}</td>
                        <td className="px-6 py-4 text-right font-bold">{user.points.toLocaleString()}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block w-2 h-2 rounded-full ${
                            user.isActive ? 'bg-green-500' : 'bg-gray-500'
                          }`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery" className="mt-0">
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Community Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden group relative"
                  >
                    <img 
                      src={src} 
                      alt={`Gallery image ${index + 1}`} 
                      className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="font-bold">Community Submission #{index + 1}</h3>
                        <p className="text-sm text-gray-300">By Stellar Member</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rewards;
