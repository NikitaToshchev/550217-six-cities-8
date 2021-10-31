import { Offer } from './offer';

export type State = {
  currentCity: string,
  offers: Offer[],
  currentSortType: string,
}
