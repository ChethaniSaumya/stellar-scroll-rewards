
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MessageCircle, SendHorizonal } from 'lucide-react';

const SocialsSection = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
      url: "#",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-6 w-6" />,
      url: "#",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Telegram",
      icon: <SendHorizonal className="h-6 w-6" />,
      url: "#",
      color: "from-cyan-400 to-blue-400"
    },
    {
      name: "Medium",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M8 9h1l3 3 3-3h1"/><path d="M8 15h2"/><path d="M14 15h2"/><path d="M9 9v6"/><path d="M15 9v6"/></svg>,
      url: "#",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="socials" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect with us and stay updated on all Stellar Scroll announcements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism rounded-2xl p-6 text-center transition-transform hover:scale-105 duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${social.color}`}>
                {social.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{social.name}</h3>
              <p className="text-gray-300 text-sm">Join our {social.name} community</p>
            </a>
          ))}
        </div>
        
        <div className="glass-morphism max-w-3xl mx-auto p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-stellar-purple to-stellar-blue">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Stay Updated</h3>
          </div>
          
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to receive the latest updates, announcements, and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-stellar-purple"
            />
            <Button className="bg-gradient-to-r from-stellar-purple to-stellar-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
