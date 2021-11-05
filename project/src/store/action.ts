import { Offer } from '../types/offer';
import { ActionType } from '../types/actions';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const loadOffers = (offers: Offer[]) => ({
  type: ActionType.LoadOffers,
  payload: {
    offers,
  },
} as const);

export const loadNearOffers = (nearOffers: Offer[]) => ({
  type: ActionType.LoadNearOffers,
  payload: {
    nearOffers,
  },
} as const);

export const loadOfferComments = (reviews: Review[]) => ({
  type: ActionType.LoadOfferComments,
  payload: {
    reviews,
  },
} as const);

export const changeSortType = (sortType: string) => ({
  type: ActionType.ChangeSortType,
  payload: sortType,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus, authEmail?: string | null) => ({
  type: ActionType.RequireAuthorization,
  payload: {
    authStatus,
    authEmail,
  },
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
