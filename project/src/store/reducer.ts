// import { mockOffers } from '../mocks/offers';
import { AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../const';
import { Actions, ActionType } from '../types/actions';
import { State } from '../types/state';

const initialState = {
  currentCity: DEFAULT_CITY,
  // offers: mockOffers,
  offers: [],
  currentSortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, currentCity: action.payload };
    case ActionType.LoadOffers: {
      const { offers } = action.payload;
      return { ...state, offers };
    }
    case ActionType.ChangeSortType:
      return { ...state, currentSortType: action.payload };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
