import {
  changeCity,
  loadOffers,
  changeSortType,
  requireAuthorization,
  requireLogout,
  loadOfferComments,
  loadNearOffers
} from '../store/action';

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeCity = 'changeCity',
  ChangeSortType = 'changeSortType',
  LoadOffers = 'data/loadOffers',
  LoadOfferComments = 'data/LoadOfferComments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadNearOffers = 'loadNearOffers',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadOfferComments>
  | ReturnType<typeof loadNearOffers>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
