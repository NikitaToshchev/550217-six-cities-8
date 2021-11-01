import { AuthorizationStatus } from '../const';
import { Offer } from './offer';

export type State = {
  currentCity: string,
  offers: Offer[],
  currentSortType: string,
  authorizationStatus: AuthorizationStatus,
}
