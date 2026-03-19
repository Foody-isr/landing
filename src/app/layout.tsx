import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/lib/i18n/context';

export const metadata: Metadata = {
  title: 'Foody — The First AI‑Based POS for Modern Restaurants',
  description: 'Foody AI-powered POS with QR ordering, delivery, pickup, scheduled orders, stock management, grocery reconciliation and AI menu automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
