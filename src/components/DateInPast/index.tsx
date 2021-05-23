import React, {useEffect, useState} from 'react';
import Select from 'components/Select';
import {CityType} from 'types';
import {citiesValues} from 'constants/DATA';
import DatePicker from 'components/DatePicker';
import {useDispatch, useSelector} from 'react-redux';
import {setPastDateThunkAC} from 'redux/thunkActions/pastDateThunkActions';
import NoCity from 'components/NoCity';
import {getPastDate, pastDateError, pastDateIsLoading} from 'redux/selectors';
import Day from 'components/WeekDays/Day';
import Loader from 'components/Loader';

import st from './index.module.scss'

const DateInPast = () => {
  const [cityValue, setCityValue] = useState({} as CityType);
  const [dateValue, setDateValue] = useState('' as string);
  const pastDateInfo = useSelector(getPastDate);
  const isLoading = useSelector(pastDateIsLoading);
  const error = useSelector(pastDateError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cityValue.name && dateValue) {
      dispatch(setPastDateThunkAC(cityValue.lon, cityValue.lat, Date.parse(dateValue)));
    }
  }, [cityValue, dateValue]);

  const generatePastDate = () => {
    if (Object.keys(pastDateInfo).length) {
      return (
        <>
          <Day
            info={pastDateInfo.current}
            temp={pastDateInfo?.current?.temp}
            className={st.past__day}
          />
        </>
      )
    } else {
      return <NoCity/>;
    }
  }

  return (
    <div className={st.past}>
      <h1 className={st.past__title}>Forecast for a Date in the Past</h1>
      <div className={st.past__controll}>
        <Select
          setValue={setCityValue}
          value={cityValue.name}
          selectValues={citiesValues}
          className={st.past__select}
        />
        <DatePicker
          setValue={setDateValue}
          value={dateValue}
          className={st.past__date}
        />
      </div>
      <div className={st.past__content}>
        {error
          ? <div className={st.past__error}>{error}</div>
          : <>
              {generatePastDate()}
              {isLoading && <Loader/>}
            </>
        }

      </div>
    </div>
  );
};

export default DateInPast;