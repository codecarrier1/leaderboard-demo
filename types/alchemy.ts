export type AlchemyOwnedNft = {
  tokenId: string;
  name: string;
  description: string;
  image: {
    cachedUrl: string;
  };
  contract: {
    address: string;
  };
};

export type AlchemyOwnedNftsResponse = {
  totalCount: number;
  ownedNfts: AlchemyOwnedNft[];
};
