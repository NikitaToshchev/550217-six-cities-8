import { Offer } from './offer';

export type State = {
  currentCity: string,
  offers: Offer[],
  currentOffer: Offer | null,
}
