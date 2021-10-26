import { Offer } from '../types/offer';
import { ActionType } from '../types/actions';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const fillingOffers = (offers: Offer[]) => ({
  type: ActionType.FillingOffers,
  payload: offers,
} as const);

export const selectCurrentOffer = (offer: Offer | null) => ({
  type: ActionType.SelectCurrentOffer,
  payload: offer,
} as const);
