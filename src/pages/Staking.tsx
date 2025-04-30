
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Staking = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="section-padding glass-morphism rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Staking Platform</span>
          </h1>
          <p className="text-xl text-center mb-8">
            Our staking platform will be available soon. Check back for updates!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Staking;
