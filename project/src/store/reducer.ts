import { mockOffers } from '../mocks/offers';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../const';
import { Actions, ActionType } from '../types/actions';
import { State } from '../types/state';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: mockOffers,
  currentSortType: DEFAULT_SORT_TYPE,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, currentCity: action.payload };
    case ActionType.FillingOffers:
      return { ...state, offers: action.payload };
    case ActionType.ChangeSortType:
      return { ...state, currentSortType: action.payload };
    default:
      return state;
  }
};

export { reducer };

