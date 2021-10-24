import { changeCity, fillingOffers } from '../store/action';
export enum ActionType {
  ChangeCity = 'changeCity',
  FillingOffers = 'fillingOffers',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillingOffers>;
