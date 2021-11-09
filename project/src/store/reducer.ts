import { AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../const';
import { Actions, ActionType } from '../types/actions';
import { State } from '../types/state';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  offerById: null,
  reviews: [],
  currentSortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userData: null,
  error: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, currentCity: action.payload };
    case ActionType.LoadOffersSucces: {
      const { offers } = action.payload;
      return { ...state, offers };
    }
    case ActionType.LoadOfferByIdRequest:
      return { ...state };
    case ActionType.LoadOfferByIdSuccess: {
      const { offer } = action.payload;
      return { ...state, offerById: offer };
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
    case ActionType.RequireAuthorizationFailure: {
      return { ...state, error: action.payload };
    }
    case ActionType.LogoutRequest:
      return { ...state };
    case ActionType.LogoutFailure:
      return { ...state, error: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.LoadOfferCommentsRequest:
      return { ...state };
    case ActionType.LoadOfferCommentsSuccess: {
      const { reviews } = action.payload;
      return { ...state, reviews };
    }
    case ActionType.LoadOfferCommentsFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { reducer };
