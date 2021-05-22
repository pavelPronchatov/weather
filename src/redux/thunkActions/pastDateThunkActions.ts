import {AppDispatch} from 'redux/store';
import {
  setPastDateAC,
  setPastDateErrorAC,
  setPastDateStartAC,
  setPastDateSuccessAC
} from 'redux/actions/pastDateActions';
import {pastApi} from 'api';

export const setPastDateThunkAC = (lon: string, lat: string, time: number) => async (dispatch: AppDispatch) => {
  try {
    await dispatch(setPastDateStartAC());
    const {data} = await pastApi.getPastWeather(lon, lat, time / 1000);
    await dispatch(setPastDateAC(data));
    await dispatch(setPastDateSuccessAC());
  } catch ({response}) {
    dispatch(setPastDateErrorAC(response.data.message));
  }
};