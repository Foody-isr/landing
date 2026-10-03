import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/** Shared chrome for indexable sector acquisition pages. */
export default function SectorsLayout({ children }: { children: React.ReactNode }) {
  return <><Navbar />{children}<Footer /></>;
}
