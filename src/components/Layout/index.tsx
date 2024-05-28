import React from 'react';
import { Inter } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from './Layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <Header />
      <div className={`${styles.layout} ${inter.className}`}>{children}</div>
      <Footer />
    </>
  );
}
