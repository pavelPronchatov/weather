import {ERROR_SET_PAST_DATE, SET_PAST_DATE, START_SET_PAST_DATE, SUCCESS_SET_PAST_DATE} from 'redux/reducers/pastDateReducerType';

const initialState = {
  isLoading: false as boolean,
  error: null as any,
  pastDate: {} as any
}

type InitialStateType = typeof initialState;

export const pastDateReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case START_SET_PAST_DATE:
      return {
        ...state,
        isLoading: true,
        error: null
      }
      
    case SET_PAST_DATE:
      return {
        ...state,
        pastDate: action.payload
      }
      
    case SUCCESS_SET_PAST_DATE:
      return {
        ...state,
        isLoading: false
      }
      
    case ERROR_SET_PAST_DATE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    
    default:
      return state
  }
}