import {
  changePageAC,
  setItemsPerPageAC,
  setWeekAC,
  setWeekErrorAC,
  setWeekStartAC,
  setWeekSuccessAC
} from 'redux/actions/weekActions';
import {weekApi} from 'api';
import {AppDispatch, RootState} from 'redux/store';

export const setWeekThunkAC = (lon: string, lat: string) => async (dispatch: AppDispatch) => {
  try {
    await dispatch(setWeekStartAC());
    const {data} = await weekApi.getWeekWeather(lon, lat);
    await dispatch(setWeekAC(data));
    await dispatch(setItemsPerPageAC());
    await dispatch(setWeekSuccessAC());
  } catch ({response}) {
    dispatch(setWeekErrorAC(response.data.message));
  }
}

export const changePageThunkAC = (isPrev: boolean) => async (dispatch: AppDispatch, getState: () => RootState) => {
  if (isPrev && getState().week.currentPage > 1) {
    dispatch(changePageAC(getState().week.currentPage - 1));
    dispatch(setItemsPerPageAC());
  } else if (!isPrev && getState().week.itemsPerPage.length >= 3) {
    dispatch(changePageAC(getState().week.currentPage + 1));
    dispatch(setItemsPerPageAC());
  }
}