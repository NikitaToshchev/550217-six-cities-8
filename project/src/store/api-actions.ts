import { ThunkActionResult } from '../types/actions';
import { loadNearOffers, loadOfferComments, loadOffers, requireAuthorization, requireLogout } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { adaptCommentsToClient, adaptOffersToClient } from '../utils/utils';
import { BackOffer } from '../types/back-offer';
import { BackReview } from '../types/back-review';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<BackOffer[]>(APIRoute.Hotels);
    const adaptedOffers = adaptOffersToClient(data);
    dispatch(loadOffers(adaptedOffers));
  };

export const fetchCommentsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<BackReview[]>(`${APIRoute.Comments}/${id}`);
    const adaptedComments = adaptCommentsToClient(data);
    dispatch(loadOfferComments(adaptedComments));
  };

export const getNearOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<BackOffer[]>(`${APIRoute.Hotels}/${id}/nearby`);
    const adaptedOffers = adaptOffersToClient(data);
    dispatch(loadNearOffers(adaptedOffers));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.post(APIRoute.Login, { email, password });
    const { email: emailAuth, token } = data;
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth, emailAuth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
