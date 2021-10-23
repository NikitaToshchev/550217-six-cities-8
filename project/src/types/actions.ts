import { Offer } from './offer';

export enum ActionType {
  ChangeCity = 'changeCity',
  FillingOffers = 'fillingOffers',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
};

export type FillingOffersAction = {
  type: ActionType.FillingOffers,
  payload: Offer[],
};

export type Actions = ChangeCityAction | FillingOffersAction;
