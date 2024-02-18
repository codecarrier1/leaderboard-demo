import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useAchievements } from '@/hooks/achivements/useAchievements';
import { AchievementCard } from './achievement-card';

export const AchievementsSlider = () => {
  const { achievements } = useAchievements();

  return (
    <Carousel className='w-full sm:max-w-xs mx-5 sm:mx-0 flex items-center'>
      <CarouselPrevious className='static sm:absolute flex-shrink-0' />
      <CarouselContent>
        {achievements?.map((achievement) => (
          <CarouselItem key={achievement.id}>
            <AchievementCard achievement={achievement} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className='static sm:absolute flex-shrink-0' />
    </Carousel>
  );
};
