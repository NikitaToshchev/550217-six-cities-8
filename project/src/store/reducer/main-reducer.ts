import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../../const';
import { Actions, ActionType } from '../../types/actions';
import { MainReducerState } from '../../types/state';

const initialState: MainReducerState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT_TYPE,
};

const mainReducer = (state = initialState, action: Actions): MainReducerState => {
  switch (action.type) {
    case ActionType.ChangeSortType:
      return { ...state, currentSortType: action.payload };
    case ActionType.ChangeCity:
      return { ...state, currentCity: action.payload };
    default:
      return state;
  }
};

export { mainReducer };
