export type Reviews = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: {
    avatarUrl: string,
    id: string,
    isPro: boolean,
    name: string,
  }
}[];
