import { AchievementService } from '@/services/achievement.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const useAchievements = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['achievements'],
    queryFn: () => AchievementService.getAchievements(),
  });

  return {
    achievements: data,
    isFetchingAchievements: isFetching,
  };
};
