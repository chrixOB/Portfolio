import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Obodai | Portfolio',
  description: 'A modern portfolio website built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
