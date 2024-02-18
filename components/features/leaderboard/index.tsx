import React from 'react';
import { LeaderBoardTable } from './leaderboard-table';

export const LeaderBoard = () => {
  return (
    <div className='md:mt-10 mt-5'>
      <h1 className='text-2xl font-semibold'>LeaderBoard</h1>
      <LeaderBoardTable />
    </div>
  );
};
