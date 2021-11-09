import { AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { Review } from './review';
import { UserInfo } from './user-info';

export type State = {
  currentCity: string,
  offers: Offer[],
  offerById: Offer | null,
  reviews: Review[],
  currentSortType: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userData?: UserInfo | null,
  error: string | null,
}
