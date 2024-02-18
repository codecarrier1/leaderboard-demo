import { AlchemyOwnedNft } from '@/types/alchemy';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NftItemProps = {
  nft: AlchemyOwnedNft;
};

export const NftItem: React.FC<NftItemProps> = ({ nft }) => {
  return (
    <div className='rounded-md overflow-hidden bg-accent'>
      <img
        className='w-full aspect-square object-cover'
        src={nft.image.cachedUrl}
        alt='ggQuest'
      />
      <div className='p-2'>
        <div>#{nft.tokenId}</div>
        <Link
          href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`}
          target='_blank'
        >
          <div className='text-primary'>{nft.name}</div>
        </Link>
        <p className='text-xs text-muted-foreground line-clamp-2'>
          {nft.description}
        </p>
      </div>
    </div>
  );
};
