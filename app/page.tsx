import Hero from '@/components/Hero';
import Home_Services_Preview from '@/components/Home_Services_Preview';
import AboutBNMediaSection from '@/components/AboutBNMediaSection';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutBNMediaSection />
      <WhyChooseUs />
      <Home_Services_Preview />
    <div></div>
      
    </main>
  );
}
