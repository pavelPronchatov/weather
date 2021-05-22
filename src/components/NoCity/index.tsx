import React from 'react';
import weatherImg from 'assets/img/mainWeather.svg';
import st from './index.module.scss'

const NoCity = () => {
  return (
    <div className={st.city__content}>
      <img src={weatherImg} alt="weather" className={st.city__img}/>
      <span className={st.city__desc}>Fill in all the fields and the weather will be displayed</span>
    </div>
  );
};

export default NoCity;