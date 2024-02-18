export type Achievement = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  imageUrl: string;
  tokenId: string;
  gameId: string;
  imageData: string;
  externalUrl: string;
};

export type AchievementsResponse = Achievement[];
