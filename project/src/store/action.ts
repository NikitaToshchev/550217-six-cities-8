import { Offer } from '../types/offer';
import { ActionType, ChangeCityAction, FillingOffersAction } from '../types/actions';

// изменение города

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

// заполнение списка предложений по аренде

export const fillingOffers = (offers: Offer[]): FillingOffersAction => ({
  type: ActionType.FillingOffers,
  payload: offers,
});
