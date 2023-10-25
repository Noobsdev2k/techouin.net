
import Navbar from '@/components/navbar'
import HeroBanner from './components/herobanner'



export default function Home() {
  return (
    <>
      <header className='w-full '>
        <Navbar />

        <HeroBanner />

      </header >
      <main className="flex flex-col items-center justify-between min-h-screen p-24">

      </main>
    </>

  )
}
