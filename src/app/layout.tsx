import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Foody — The First AI‑Based POS for Modern Restaurants',
  description: 'Foody AI-powered POS with QR ordering, delivery, pickup, scheduled orders, stock management, grocery reconciliation and AI menu automation.',
  openGraph: {
    title: 'Foody — The First AI‑Based POS for Modern Restaurants',
    description: 'Foody AI-powered POS with QR ordering, delivery, pickup, scheduled orders, stock management, grocery reconciliation and AI menu automation.',
    siteName: 'Foody POS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foody — The First AI‑Based POS for Modern Restaurants',
    description: 'Foody AI-powered POS with QR ordering, delivery, pickup, scheduled orders, stock management, grocery reconciliation and AI menu automation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
