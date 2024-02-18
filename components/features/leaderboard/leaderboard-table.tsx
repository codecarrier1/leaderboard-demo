import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLeaderBoardPlayers } from '@/hooks/leaderboard/useLeaderBoardPlayers';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LeaderBoardPlayer } from './atoms/leaderboard-player';
import { Skeleton } from '@/components/ui/skeleton';

export const LeaderBoardTable = () => {
  const { totalPlayers, players, isLoading } = useLeaderBoardPlayers();

  return (
    <div className='mt-5 border-2 rounded-md'>
      {isLoading ? (
        <Skeleton className='h-[100px] w-full' />
      ) : (
        <ScrollArea className='h-[500px] relative'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='sm:w-[100px] w-[50px] sm:text-xl text-sm'>
                  Rank
                </TableHead>
                <TableHead className='sm:text-xl text-sm w-[150px] sm:w-auto'>
                  Player
                </TableHead>
                <TableHead className='text-right sm:text-xl text-sm'>
                  Reputation
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players?.map((player, index) => (
                <TableRow key={player.id}>
                  <TableCell className='font-medium'>{index + 1}</TableCell>
                  <TableCell className='w-[150px] sm:w-auto'>
                    <LeaderBoardPlayer player={player} />
                  </TableCell>
                  <TableCell className='text-right text-lg font-medium'>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          {player.reputation.total}
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className='space-y-2 p-2'>
                            <div className='flex gap-2'>
                              <div className='w-[50px] text-left'>Total</div>
                              <div>{player.reputation.total}</div>
                            </div>
                            <div className='flex gap-2'>
                              <div className='w-[50px] text-left'>Gained</div>
                              <div>{player.reputation.gained}</div>
                            </div>
                            <div className='flex gap-2'>
                              <div className='w-[50px] text-left'>Lost</div>
                              <div className='text-destructive'>
                                {player.reputation.lost}
                              </div>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
    </div>
  );
};
