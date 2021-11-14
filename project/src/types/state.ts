import { AuthorizationStatus } from '../const';
import { RootState } from '../store/reducer/root-reducer';
import { Offer } from './offer';
import { Review } from './review';
import { UserInfo } from './user-info';

export type UserReducerState = {
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userData?: UserInfo | null,
  error: string | null,
  authorizationLoading: boolean,
  logoutLoading: boolean,
  loginActionLoading: boolean,
}

export type DataReducerState = {
  offers: Offer[],
  offerById: Offer | null,
  nearOffers: Offer[],
  reviews: Review[],
  error: string | null,
  loadOffersLoading: boolean,
  loadNearOffersLoading: boolean,
  loadOfferByIdLoading: boolean,
  loadOfferCommentsLoading: boolean,
  postCommentLoading: boolean,
  postCommentSuccess: boolean,
};

export type MainReducerState = {
  currentCity: string,
  currentSortType: string,
}

export type State = RootState;
