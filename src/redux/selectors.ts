import {RootState} from 'redux/store';

export const getWeek = (state: RootState) => state.week.itemsPerPage;
export const getWeekMobile = (state: RootState) => state.week.weekData.daily;
export const getWeekIsLoading = (state: RootState) => state.week.isLoading;
export const getWeekIsError = (state: RootState) => state.week.error;

export const getPastDate = (state: RootState) => state.past.pastDate;
export const pastDateIsLoading = (state: RootState) => state.past.isLoading;
export const pastDateError = (state: RootState) => state.past.error;