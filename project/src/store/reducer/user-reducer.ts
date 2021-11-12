import { AuthorizationStatus } from '../../const';
import { Actions, ActionType } from '../../types/actions';
import { UserReducerState } from '../../types/state';

const initialState: UserReducerState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userData: null,
  error: null,
};

const userReducer = (state = initialState, action: Actions): UserReducerState => {
  switch (action.type) {
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
    case ActionType.LoginActionRequest:
      return { ...state };
    case ActionType.LoginActionFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { userReducer };
