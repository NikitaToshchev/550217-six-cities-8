export type BackReview = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: {
    ['avatar_url']?: string,
    id: string,
    ['is_pro']?: boolean,
    name: string,
  }
}
