import { AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { UserInfo } from './user-info';

export type State = {
  currentCity: string,
  offers: Offer[],
  currentSortType: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userData?: UserInfo | null,
}
