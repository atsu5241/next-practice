import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from './component/header';
import { NextAuthProvider } from './lib/next-auth/provider';
import { Suspense } from 'react';
import Loading from './loading';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book Commerce',
  description: 'book commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSansJP.variable} antialiased`}
      >
        <NextAuthProvider>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}
