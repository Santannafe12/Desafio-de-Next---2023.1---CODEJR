import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width" charSet="utf-8"/>
    </Head>
    <main className={montserrat.className}>
    <Component {...pageProps} />
    </main>
    </>
  ) 
}
