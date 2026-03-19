import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Power your business with Foody POS.',
  description: 'Accept payments, manage sales, and run your business in-store or online with one platform. Start selling wherever you want in minutes.',
  openGraph: {
    title: 'Power your business with Foody POS.',
    description: 'Accept payments, manage sales, and run your business in-store or online with one platform. Start selling wherever you want in minutes.',
    siteName: 'Foody POS',
    type: 'website',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: 'Foody POS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power your business with Foody POS.',
    description: 'Accept payments, manage sales, and run your business in-store or online with one platform. Start selling wherever you want in minutes.',
    images: ['/assets/og-image.png'],
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
