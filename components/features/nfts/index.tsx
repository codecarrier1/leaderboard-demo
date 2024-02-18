import React from 'react';
import { NftsSection } from './nfts-section';

export const Nfts = () => {
  return (
    <div className='mt-20'>
      <div className=''>
        <h2 className='text-2xl font-semibold'>Your Digital Masterpieces</h2>
        <h3 className='text-muted-foreground text-xl mt-5'>
          Explore your unique collection of NFTs, showcasing your journey
          through the realms of art and ownership.
        </h3>
      </div>
      <NftsSection />
    </div>
  );
};
