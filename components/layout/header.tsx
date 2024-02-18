import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <div className='flex items-center justify-between py-5'>
      <div className='w-[120px] h-[37px] relative'>
        <Image src='/images/ggLogo.png' fill alt='ggQuest' />
      </div>
    </div>
  );
};
