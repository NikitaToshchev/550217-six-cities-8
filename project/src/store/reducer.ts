import { mockOffers } from '../mocks/offers';
import { DEFAULT_CITY } from '../const';
import { Actions, ActionType } from '../types/actions';
import { State } from '../types/state';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: mockOffers, // когда сервер пустой список
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, currentCity: action.payload };
    case ActionType.FillingOffers:
      return { ...state, offers: action.payload };
    default:
      return state;
  }
};

export { reducer };

