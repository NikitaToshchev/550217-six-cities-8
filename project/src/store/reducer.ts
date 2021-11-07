import { AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../const';
import { Actions, ActionType } from '../types/actions';
import { State } from '../types/state';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  currentSortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userData: null,
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
    case ActionType.RequireAuthorizationRequest:
      return { ...state };
    case ActionType.RequireAuthorizationSucces: {
      const { authStatus, userData } = action.payload;
      return {
        ...state,
        authorizationStatus: authStatus,
        userData,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
