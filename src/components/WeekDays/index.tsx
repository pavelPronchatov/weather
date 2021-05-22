import React, {useEffect, useState} from 'react'
import Select from 'components/Select'
import {citiesValues} from 'constants/DATA'
import {CityType} from 'types'
import {setWeekThunkAC} from 'redux/thunkActions/weekThunkAction';
import {useDispatch} from 'react-redux';
import Days from './Days';

import st from './index.module.scss'

const WeekDays = () => {
  const dispatch = useDispatch();
  const [cityValue, setCityValue] = useState({} as CityType);

  useEffect(() => {
    if (Object.keys(cityValue).length) {
      dispatch(setWeekThunkAC(cityValue.lon, cityValue.lat));
    }
  }, [cityValue]);

  return (
    <div className={st.week}>
      <h1 className={st.week__title}>7 Days Forecast</h1>
      <Select
        selectValues={citiesValues}
        value={cityValue.name}
        setValue={setCityValue}
      />
      <Days/>
    </div>
  )
}

export default WeekDays
