import { Offer } from '../types/offer';
import { ActionType } from '../types/actions';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';
import { UserInfo } from '../types/user-info';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const loadOffersRequest = () => ({
  type: ActionType.LoadOffersRequest,
} as const);

export const loadOffersSucces = (offers: Offer[]) => ({
  type: ActionType.LoadOffersSucces,
  payload: {
    offers,
  },
} as const);

export const loadOffersFailure = (error: string | null) => ({
  type: ActionType.LoadOffersFailure,
  payload: error,
} as const);

export const loadOfferByIdRequest = () => ({
  type: ActionType.LoadOfferByIdRequest,
} as const);

export const loadOfferByIdSuccess = (offerById: Offer) => ({
  type: ActionType.LoadOfferByIdSuccess,
  payload: {
    offerById,
  },
} as const);

export const loadOfferByIdFailure = (error: string | null) => ({
  type: ActionType.LoadOfferByIdFailure,
  payload: error,
} as const);

export const loadNearOffersRequest = () => ({
  type: ActionType.LoadNearOffersRequest,
} as const);

export const loadNearOffersSuccess = (nearOffers: Offer[]) => ({
  type: ActionType.LoadNearOffersSuccess,
  payload: {
    nearOffers,
  },
} as const);

export const loadNearOffersFailure = (error: string | null) => ({
  type: ActionType.LoadNearOffersFailure,
  payload: error,
} as const);

export const loadOfferCommentsRequest = () => ({
  type: ActionType.LoadOfferCommentsRequest,
} as const);

export const loadOfferCommentsSuccess = (reviews: Review[]) => ({
  type: ActionType.LoadOfferCommentsSuccess,
  payload: {
    reviews,
  },
} as const);

export const loadOfferCommentsFailure = (error: string | null) => ({
  type: ActionType.LoadOfferCommentsFailure,
  payload: error,
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

export const postCommentRequest = () => ({
  type: ActionType.PostCommentRequest,
} as const);

export const postCommentSuccess = (reviews: Review[]) => ({
  type: ActionType.PostCommentSuccess,
  payload: {
    reviews,
  },
} as const);

export const postCommentFailure = (error: string | null) => ({
  type: ActionType.PostCommentFailure,
  payload: error,
} as const);
