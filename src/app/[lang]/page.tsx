import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CrossLink from '@/components/CrossLink';
import WhatsApp from '@/components/WhatsApp';
import Profit from '@/components/Profit';
import Screenshots from '@/components/Screenshots';
import Footer from '@/components/Footer';
import IntroVideo from '@/components/IntroVideo';
import { getMarketingMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return getMarketingMetadata((await params).lang, 'home');
}

export default function Home() {
  return (
    <>
      <IntroVideo />
      <Navbar />
      <Hero />
      <Features />
      <CrossLink labelKey="crosslinks.home_to_food" href="/sectors/food-beverage" />
      <WhatsApp />
      <Profit />
      <Screenshots />
      <Footer />
    </>
  );
}
