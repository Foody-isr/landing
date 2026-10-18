import Footer from '@/components/Footer';
import SupportHeader from '@/components/help/SupportHeader';
import SupportAssistant from '@/components/help/SupportAssistant';
import './support.css';

/** Shared public support shell and one assistant conversation across help routes. */
export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <><SupportHeader /><SupportAssistant>{children}</SupportAssistant><Footer /></>;
}
