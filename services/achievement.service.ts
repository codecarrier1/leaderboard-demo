import { BaseService } from './base.service';
import { AchievementsResponse } from '@/types/achievement';

export const AchievementService = {
  getAchievements: () =>
    BaseService.get<AchievementsResponse>(
      '/achievements?take=100&skip=0&gameId=813679'
    ).then((res) => res.data),
};
