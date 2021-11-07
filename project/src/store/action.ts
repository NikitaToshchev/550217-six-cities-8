import { Offer } from '../types/offer';
import { ActionType } from '../types/actions';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';
import { UserInfo } from '../types/user-info';

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

export const requireAuthorizationRequest = () => ({
  type: ActionType.RequireAuthorizationRequest,
} as const);

export const requireAuthorizationSucces = (authStatus: AuthorizationStatus, userData?: UserInfo | null) => ({
  type: ActionType.RequireAuthorizationSucces,
  payload: {
    authStatus,
    userData,
  },
} as const);

export const requireAuthorizationFailure = (error: string | null) => ({
  type: ActionType.RequireAuthorizationFailure,
  payload: error,
} as const);

export const loginActionRequest = () => ({
  type: ActionType.LoginActionRequest,
} as const);

export const loginActionFailure = (error: string | null) => ({
  type: ActionType.LoginActionFailure,
  payload: error,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const logoutRequest = () => ({
  type: ActionType.LogoutRequest,
} as const);

export const logoutFailure = (error: string | null) => ({
  type: ActionType.LogoutFailure,
  payload: error,
} as const);
