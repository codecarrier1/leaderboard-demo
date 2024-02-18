import { LeaderBoardPlayer as TLeaderBoardPlayer } from '@/types/leaderboard';
import Image from 'next/image';
import React from 'react';
import { UserIcon, XIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

type LeaderBoardPlayerProps = {
  player: TLeaderBoardPlayer;
};

export const LeaderBoardPlayer: React.FC<LeaderBoardPlayerProps> = ({
  player,
}) => {
  return (
    <div className='flex items-center gap-2 w-[150px] sm:w-auto'>
      {player.profilePictureUrl ? (
        <div className='w-10 h-10 rounded-full overflow-hidden relative border'>
          <Image src={player.profilePictureUrl} fill alt='ggQuest' />
        </div>
      ) : (
        <UserIcon size={40} />
      )}
      <div>
        <div className='flex items-center gap-2'>
          <h6 className='font-medium text-base'>@{player.name}</h6>
          {!!player.twitter && (
            <Link href={`https://twitter.com/${player.twitter}`}>
              <XIcon size={24} />
            </Link>
          )}
        </div>

        <div className='flex items-center gap-2 mt-1 text-muted-foreground text-sm'>
          <div className='sm:w-auto w-[50px] truncate'>
            {player.mainAddress}
          </div>
          <Link
            href={`https://etherscan.io/address/${player.mainAddress}`}
            target='_blank'
          >
            <ExternalLinkIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
