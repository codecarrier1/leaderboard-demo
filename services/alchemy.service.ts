import { AlchemyOwnedNftsResponse } from '@/types/alchemy';
import axios from 'axios';

export const AlchemyService = {
  getNFTsForOwner: (address: string) =>
    axios
      .get<AlchemyOwnedNftsResponse>(
        `https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=10`
      )
      .then((res) => res.data),
};
