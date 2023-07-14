import Head from 'next/head'
import localFont from "next/font/local"
import ControlPanel from '../components/ControlPanel'

const karla = localFont({src: '../../public/fonts/Karla-Regular.woff2'})

export default function Home() {

  return (
    <>
      <Head>
        <title>Audio Control</title>
        <meta name="audio control by HausAusTon GbR" content="audio control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={karla.className}>
        <ControlPanel />
      </main>
    </>
  )
}
