import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import I18nProvider from '@/components/i18n-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Donald Alphonso AHOSSI - Backend Developer | Portfolio',
  description: 'Professional backend developer specializing in Node.js, Express, NestJS, and modern web technologies. View my projects and get in touch.',
  keywords: 'backend developer, Node.js, Express, NestJS, MongoDB, SQL, API development, portfolio',
  authors: [{ name: 'Donald Alphonso AHOSSI' }],
  openGraph: {
    title: 'Donald Alphonso AHOSSI - Backend Developer Portfolio',
    description: 'Professional backend developer specializing in modern web technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donald Alphonso AHOSSI - Backend Developer',
    description: 'Professional backend developer portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}