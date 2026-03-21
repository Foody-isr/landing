import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CrossLink from '@/components/CrossLink';
import Profit from '@/components/Profit';
import Screenshots from '@/components/Screenshots';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CrossLink labelKey="crosslinks.home_to_food" href="/sectors/food-beverage" />
      <Profit />
      <Screenshots />
      <Footer />
    </>
  );
}
