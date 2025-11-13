import Hero from '@/components/Hero';
import Home_Services_Preview from '@/components/Home_Services_Preview';
import AboutBNMediaSection from '@/components/AboutBNMediaSection';
import WhyChooseUs from '@/components/WhyChooseUs';


export const metadata = {
  title: "BN Media – Digital Marketing & Web Solutions in Akola",
  description:
    "Grow your business with BN Media. We provide creative digital marketing, website design, branding, and software solutions tailored for your success.",
};

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
