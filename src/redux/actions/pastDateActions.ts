import {
  ERROR_SET_PAST_DATE,
  SET_PAST_DATE,
  START_SET_PAST_DATE,
  SUCCESS_SET_PAST_DATE
} from 'redux/reducers/pastDateReducerType';

export const setPastDateStartAC = () => ({type: START_SET_PAST_DATE});
export const setPastDateAC = (payload: any) => ({type: SET_PAST_DATE, payload});
export const setPastDateSuccessAC = () => ({type: SUCCESS_SET_PAST_DATE});
export const setPastDateErrorAC = (payload: any) => ({type: ERROR_SET_PAST_DATE, payload});
