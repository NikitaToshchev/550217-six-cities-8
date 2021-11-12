import {
  changeCity,
  loadOffersRequest,
  loadOffersFailure,
  loadOffersSucces,
  changeSortType,
  requireAuthorizationRequest,
  requireAuthorizationSucces,
  requireAuthorizationFailure,
  loadOfferCommentsRequest,
  loadOfferCommentsSuccess,
  loadOfferCommentsFailure,
  loginActionRequest,
  loginActionFailure,
  logoutRequest,
  requireLogout,
  logoutFailure,
  loadOfferByIdRequest,
  loadOfferByIdSuccess,
  loadOfferByIdFailure,
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure,
  loadNearOffersRequest,
  loadNearOffersSuccess,
  loadNearOffersFailure

} from '../store/actions/action';

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  LoadOffersRequest = 'data/loadOffersRequest',
  LoadOffersSucces = 'data/loadOffersSucces',
  LoadOffersFailure = 'data/loadOffersFailure',
  LoadOfferByIdRequest = 'data/loadOffersByIdRequest',
  LoadOfferByIdSuccess = 'data/loadOfferByIdSuccess',
  LoadOfferByIdFailure = 'data/loadOfferByIdFailure',
  LoadNearOffersRequest = 'data/loadNearOffersRequest',
  LoadNearOffersSuccess = 'data/loadNearOffersSuccess',
  LoadNearOffersFailure = 'data/loadNearOffersFailure',
  LoadOfferCommentsRequest = 'data/loadOfferCommentsRequest',
  LoadOfferCommentsSuccess = 'data/loadOfferCommentsSuccess',
  LoadOfferCommentsFailure = 'data/loadOfferCommentsFailure',
  PostCommentRequest = 'data/postCommentRequest',
  PostCommentSuccess = 'data/postCommentSuccess',
  PostCommentFailure = 'data/postCommentFailure',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationFailure = 'user/requireAuthorization',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  LoginActionRequest = 'user/loginActionRequest',
  LoginActionFailure = 'user/loginActionFailure',
  RequireLogout = 'user/requireLogout',
  LogoutRequest = 'user/logoutRequest',
  LogoutFailure = 'user/logoutFailure',

}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadOffersFailure>
  | ReturnType<typeof loadOffersRequest>
  | ReturnType<typeof loadOffersSucces>
  | ReturnType<typeof requireAuthorizationRequest>
  | ReturnType<typeof requireAuthorizationSucces>
  | ReturnType<typeof requireAuthorizationFailure>
  | ReturnType<typeof loginActionRequest>
  | ReturnType<typeof loginActionFailure>
  | ReturnType<typeof loadOfferCommentsRequest>
  | ReturnType<typeof loadOfferCommentsSuccess>
  | ReturnType<typeof loadOfferCommentsFailure>
  | ReturnType<typeof postCommentRequest>
  | ReturnType<typeof postCommentSuccess>
  | ReturnType<typeof postCommentFailure>
  | ReturnType<typeof loadNearOffersRequest>
  | ReturnType<typeof loadNearOffersSuccess>
  | ReturnType<typeof loadNearOffersFailure>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof logoutFailure>
  | ReturnType<typeof loadOfferByIdRequest>
  | ReturnType<typeof loadOfferByIdSuccess>
  | ReturnType<typeof loadOfferByIdFailure>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
