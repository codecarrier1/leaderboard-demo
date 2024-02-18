import React from 'react';
import { AchievementsSlider } from './achievements-slider';

export const Achivements = () => {
  return (
    <div className='mt-20 flex md:flex-row flex-col md:items-start items-center sm:gap-20 gap-10'>
      <div className='md:max-w-xl'>
        <h2 className='text-2xl font-semibold'>
          Achivements: Celebrate Your Legendary Triumphs
        </h2>
        <h3 className='text-muted-foreground text-xl mt-5'>
          Venture beyond the ordinary. Unveil your achievements, relive epic
          moments, and carve your name in the annals of glory.
        </h3>
      </div>
      <AchievementsSlider />
    </div>
  );
};
