import { Achivements } from '@/components/features/achievements';
import { LeaderBoard } from '@/components/features/leaderboard';
import { Nfts } from '@/components/features/nfts';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/layout/hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={`bg-background`}>
      <div className='max-w-7xl w-full mx-auto md:p-10 p-5 h-full min-h-screen'>
        <Header />
        <Hero />
        <LeaderBoard />
        <Achivements />
        <Nfts />
      </div>
    </main>
  );
}
