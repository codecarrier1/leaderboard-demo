import { Card, CardContent } from '@/components/ui/card';
import { Achievement } from '@/types/achievement';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

type AchievementCardProps = {
  achievement: Achievement;
};

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
}) => {
  return (
    <Card className='border-none'>
      <CardContent className='md:w-80 w-full p-4'>
        <div className='w-full aspect-square relative'>
          <Image src={achievement.imageUrl} fill alt='ggQuest' />
        </div>
        <p className='mt-2 text-muted-foreground text-xs'>
          {dayjs(achievement.createdAt).fromNow()}
        </p>
        <div className='text-primary mt-2 text-lg font-semibold'>
          {achievement.name}
        </div>
        <p className='text-muted-foreground text-xs line-clamp-2'>
          {achievement.description}
        </p>
      </CardContent>
    </Card>
  );
};
