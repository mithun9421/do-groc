import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../styles/theme';
import React from 'react';

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
