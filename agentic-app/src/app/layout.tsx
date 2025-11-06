import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'National Communicable Disease Dashboard',
  description:
    'Timely updates, analytics, and resources on communicable diseases curated from India\'s Ministry of Health and Family Welfare.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>{children}</body>
    </html>
  );
}
