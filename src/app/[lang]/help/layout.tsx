import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Shared layout for all help center pages.
 * Navbar and Footer are inherited from the parent [lang] layout's I18nProvider.
 */
export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
