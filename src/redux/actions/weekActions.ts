import {
  CHANGE_PAGE,
  ERROR_SET_WEEK,
  SET_ITEMS_PER_PAGE,
  SET_WEEK,
  START_SET_WEEK,
  SUCCESS_SET_WEEK
} from 'redux/reducers/weekReducerType';

export const setWeekStartAC = () => ({type: START_SET_WEEK});
export const setWeekAC = (payload: any) => ({type: SET_WEEK, payload});
export const setWeekSuccessAC = () => ({type: SUCCESS_SET_WEEK});
export const setWeekErrorAC = (payload: any) => ({type: ERROR_SET_WEEK, payload});
export const setItemsPerPageAC = () => ({type: SET_ITEMS_PER_PAGE});
export const changePageAC = (payload: number) => ({type: CHANGE_PAGE, payload});