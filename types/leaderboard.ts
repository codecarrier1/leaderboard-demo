export type LeaderBoardPlayerReputation = {
  gained: number;
  lost: number;
  total: number;
};

export type LeaderBoardPlayer = {
  id: string;
  name: string;
  biography: string | null;
  email: string | null;
  discord: string | null;
  twitter: string | null;
  pseudo: string;
  profilePictureUrl: string;
  coverPictureUrl: string | null;
  mainAddress: string;
  reputation: LeaderBoardPlayerReputation;
};

export type LeaderBoardPlayersResponse = {
  total: number;
  data: LeaderBoardPlayer[];
};
