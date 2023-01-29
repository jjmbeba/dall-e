import Head from 'next/head'
import Link from 'next/link' 
import Header from '../components/Header'
import HomeSection from '../components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dall-e clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/artificial-intelligence.png" />
      </Head>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <HomeSection/>
      </main>
    </>
  )
}
