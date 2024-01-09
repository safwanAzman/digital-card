import { Inter } from 'next/font/google';
import { Card } from '@/components/Card';
import Arep from '@/assets/arep.png'
import Safwans from '@/assets/safwans.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-4 sm:p-24 container mx-auto `}>
        <h1 className="text-lg font-semibold sm:text-2xl"> Digital Card By Safwan Azman</h1>

        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* <Card
              src={Safwans}
              title="Safwan & Asyqin"
              desc="This is my wedding card"
              href="https://safwan-card.vercel.app/"
            /> */}
            
            <Card
              src={Arep}
              title="Arep & Zati"
              desc="This is my cousin Wedding card"
              href="https://izzatiarif10623.vercel.app/"
            />

            <div className="flex items-center justify-center p-4 border border-black rounded-lg">
                Next who ?
            </div>
        </div>
    </main>
  )
}
