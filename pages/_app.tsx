import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width" charSet="utf-8" />
      </Head>
      <main className={montserrat.className}>
      </main>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
    </>
  )
}
