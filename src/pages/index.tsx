import Head from 'next/head'
import { Inter } from 'next/font/google'
import ControlPanel from '../components/ControlPanel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  return (
    <>
      <Head>
        <title>Audio Control</title>
        <meta name="audio control by HausAusTon GbR" content="audio control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ControlPanel />
      </main>
    </>
  )
}
