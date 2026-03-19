import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Profit from '@/components/Profit';
import Screenshots from '@/components/Screenshots';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Profit />
      <Screenshots />
      <Footer />
    </>
  );
}
