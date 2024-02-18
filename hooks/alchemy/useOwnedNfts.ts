import { AlchemyService } from '@/services/alchemy.service';
import { isValidEthereumAddress } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const useOwnedNfts = (address: string) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['alchemy-owned-nfts', address],
    queryFn: () => AlchemyService.getNFTsForOwner(address),
    enabled: isValidEthereumAddress(address),
  });

  const totalCount = data?.totalCount;
  const nfts = data?.ownedNfts;

  const noNfts = totalCount === 0;

  return { totalCount, nfts, isLoading: isLoading || isFetching, noNfts };
};
