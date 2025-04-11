
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy } from 'lucide-react';

const RewardsSection = () => {
  return (
    <section id="rewards" className="section overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stellar <span className="text-gradient">Rewards</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Earn points, climb the leaderboard, and unlock exclusive rewards in our community-driven ecosystem. The more you engage, the more you earn.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our unique reward mechanism encourages participation and contribution to the Stellar Scroll community, with regular distributions and special events.
            </p>
            <Link to="/rewards">
              <Button className="bg-gradient-to-r from-stellar-purple to-stellar-blue text-white px-6 py-2 text-lg flex items-center gap-2 rounded-xl hover:opacity-90 transition-opacity">
                View Rewards Dashboard
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 glass-morphism p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Trophy className="text-stellar-purple w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold">Current Top Earners</h3>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(index => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center">
                    <span className="text-stellar-purple font-bold text-lg mr-4">#{index}</span>
                    <div>
                      <h4 className="font-medium">User{index}NFT</h4>
                      <p className="text-sm text-gray-400">Active since April 2025</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-stellar-blue font-bold text-lg">{9000 - (index * 500)} pts</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/rewards" className="text-stellar-purple hover:text-stellar-blue transition-colors inline-flex items-center">
                See full leaderboard
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
