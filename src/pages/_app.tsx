import React from 'react';
import { AppProps } from 'next/app';

import Layout from '@/components/Layout'

import '../styles/globals.scss';
import '../styles/animations.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
