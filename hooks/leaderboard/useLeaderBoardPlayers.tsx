import { LeaderBoardService } from '@/services/leaderboard.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const useLeaderBoardPlayers = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['leaderboard-players'],
    queryFn: () => LeaderBoardService.getPlayers(),
  });

  const totalPlayers = data?.total;
  const players = data?.data;

  return {
    totalPlayers,
    players,
    isLoading: isLoading || isFetching,
    refetchPlayers: refetch,
  };
};
