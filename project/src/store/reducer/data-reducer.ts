import { Actions, ActionType } from '../../types/actions';
import { DataReducerState } from '../../types/state';

const initialState: DataReducerState = {
  offers: [],
  offerById: null,
  nearOffers: [],
  reviews: [],
  error: null,
};

const dataReducer = (state = initialState, action: Actions): DataReducerState => {
  switch (action.type) {
    case ActionType.LoadOffersRequest:
      return { ...state };
    case ActionType.LoadOffersSucces: {
      const { offers } = action.payload;
      return { ...state, offers };
    }
    case ActionType.LoadOffersFailure: {
      return { ...state, error: action.payload };
    }
    case ActionType.LoadNearOffersRequest:
      return { ...state };
    case ActionType.LoadNearOffersSuccess: {
      const { nearOffers } = action.payload;
      return { ...state, nearOffers };
    }
    case ActionType.LoadNearOffersFailure: {
      return { ...state, error: action.payload };
    }
    case ActionType.LoadOfferByIdRequest:
      return { ...state };
    case ActionType.LoadOfferByIdSuccess: {
      const { offerById } = action.payload;
      return { ...state, offerById: offerById };
    }
    case ActionType.LoadOfferByIdFailure: {
      return { ...state, error: action.payload };
    }
    case ActionType.LoadOfferCommentsRequest:
      return { ...state };
    case ActionType.LoadOfferCommentsSuccess: {
      const { reviews } = action.payload;
      return { ...state, reviews };
    }
    case ActionType.LoadOfferCommentsFailure:
      return { ...state, error: action.payload };
    case ActionType.PostCommentRequest:
      return { ...state };
    case ActionType.PostCommentSuccess: {
      return { ...state };
    }
    case ActionType.PostCommentFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { dataReducer };
