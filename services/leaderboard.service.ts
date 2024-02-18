import { LeaderBoardPlayersResponse } from '@/types/leaderboard';
import { BaseService } from './base.service';

export const LeaderBoardService = {
  getPlayers: () =>
    BaseService.get<LeaderBoardPlayersResponse>(
      '/leaderboard/players?take=100&skip=0'
    ).then((res) => res.data),
};
