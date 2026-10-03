import { Sectors, CallToAction } from '@/components/marketing/Shared';
import { resolveLang } from '@/lib/seo';

/** Food-service overview preserving the existing discovery URL. */
export default async function FoodPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang);
  const text = { he: ['מבית הקפה הראשון ועד לרשת הבאה.', 'כלים למסעדות, בתי קפה, מזון מהיר וקבוצות מסעדות בישראל. בחרו את סוג הפעילות וגלו מה מתאים לכם.'], fr: ['Du premier café au prochain réseau.', 'Des outils pour les restaurants, cafés, comptoirs et groupes en Israël. Découvrez la solution qui correspond à votre activité.'], en: ['From your first café to your next location.', 'Tools for restaurants, cafés, quick service and restaurant groups in Israel. Find the right fit for your business.'] }[lang];
  return <main id="main-content"><section className="shell overview-heading"><h1>{text[0]}</h1><p>{text[1]}</p></section><Sectors lang={lang} /><CallToAction lang={lang} /></main>;
}
