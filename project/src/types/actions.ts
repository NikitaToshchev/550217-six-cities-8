import {
  changeCity,
  loadOffers,
  changeSortType,
  requireAuthorizationRequest,
  requireAuthorizationSucces,
  requireAuthorizationFailure,
  loadOfferComments,
  loadNearOffers,
  loginActionRequest,
  loginActionFailure,
  logoutRequest,
  requireLogout,
  logoutFailure
} from '../store/action';

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  LoadOffers = 'data/loadOffers',
  LoadOfferComments = 'data/LoadOfferComments',
  LoadNearOffers = 'data/loadNearOffers',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationFailure = 'user/requireAuthorization',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  LoginActionRequest = 'user/loginActionRequest',
  LoginActionFailure = 'user/loginActionFailure',
  RequireLogout = 'user/requireLogout',
  LogoutRequest = 'user/logoutRequest',
  LogoutFailure = 'user/logoutFailure'
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorizationRequest>
  | ReturnType<typeof requireAuthorizationSucces>
  | ReturnType<typeof requireAuthorizationFailure>
  | ReturnType<typeof loginActionRequest>
  | ReturnType<typeof loginActionFailure>
  | ReturnType<typeof loadOfferComments>
  | ReturnType<typeof loadNearOffers>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof logoutFailure>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
