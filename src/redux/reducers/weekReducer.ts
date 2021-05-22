import {getItemsPerPage} from 'utils';
import {
  CHANGE_PAGE,
  ERROR_SET_WEEK,
  SET_ITEMS_PER_PAGE,
  SET_WEEK,
  START_SET_WEEK,
  SUCCESS_SET_WEEK
} from 'redux/reducers/weekReducerType';

const initialState = {
  isLoading: false as boolean,
  error: null as any,
  weekData: {} as any,
  currentPage: 1 as number,
  itemsPerPage: [] as any
}

type InitialStateType = typeof initialState;

export const weekReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case START_SET_WEEK:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case SET_WEEK:
      return {
        ...state,
        weekData: action.payload
      }

    case SUCCESS_SET_WEEK:
      return {
        ...state,
        isLoading: false
      }

    case ERROR_SET_WEEK:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: getItemsPerPage(state.weekData.daily, state.currentPage)
      }

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    default:
      return state
  }
}