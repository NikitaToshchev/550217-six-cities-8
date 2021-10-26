import { changeCity, fillingOffers, selectCurrentOffer } from '../store/action';
export enum ActionType {
  ChangeCity = 'changeCity',
  FillingOffers = 'fillingOffers',
  SelectCurrentOffer = 'selectCurrentOffer',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillingOffers>
  | ReturnType<typeof selectCurrentOffer>;
