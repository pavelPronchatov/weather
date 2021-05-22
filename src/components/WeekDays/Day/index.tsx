import {formatDate, formatTemp} from 'utils';
import React from 'react';
import st from './index.module.scss'

type DayTypes = {
  info: any,
  temp: number
  className?: string
}

const Day: React.FC<DayTypes> = ({info, temp, className, ...other}) => {
  return (
    <div
      className={className || st.day}
      {...other}
    >
      <div className={st.day__date}>{formatDate(info?.dt)}</div>
      <img className={st.day__img} src={`http://openweathermap.org/img/wn/${info?.weather[0].icon}@2x.png`} alt=""/>
      <div className={st.day__temp}>{formatTemp(temp)}</div>
    </div>
  );
};

export default Day;