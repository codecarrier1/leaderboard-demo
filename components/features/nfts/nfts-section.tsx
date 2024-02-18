import React, { useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Input } from '@/components/ui/input';
import { isValidEthereumAddress } from '@/utils';
import { useOwnedNfts } from '@/hooks/alchemy/useOwnedNfts';
import { NftItem } from './nft-item';

export const NftsSection = () => {
  const [address, setAddress] = useState('');

  const { nfts, totalCount, isLoading, noNfts } = useOwnedNfts(address);

  return (
    <div className='mt-10'>
      <div className='w-full'>
        <label>Your Ethereum Wallet Address</label>
        <div className='flex items-center gap-4'>
          <Input
            className='mt-2 max-w-96 w-full'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {isLoading && <ReloadIcon className='ml-2 h-4 w-4 animate-spin' />}
        </div>
        {!!address && !isValidEthereumAddress(address) && (
          <p className='text-xs text-destructive mt-1'>Invalid address</p>
        )}
      </div>
      {!noNfts ? (
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
          {' '}
          {nfts?.map((nft) => (
            <NftItem nft={nft} key={nft.tokenId} />
          ))}
        </div>
      ) : (
        <div className='mt-4 text-destructive'>
          The user doesn&apos;t own any nfts.
        </div>
      )}
    </div>
  );
};
