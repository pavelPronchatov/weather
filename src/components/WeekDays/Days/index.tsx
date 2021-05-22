import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getWeek, getWeekIsError, getWeekIsLoading} from 'redux/selectors';
import NoCity from 'components/NoCity';
import Day from 'components/WeekDays/Day';
import {changePageThunkAC} from 'redux/thunkActions/weekThunkAction';
import Loader from 'components/Loader';

import st from './Days.module.scss';

const Days = () => {
  const weekData = useSelector(getWeek);
  const dispatch = useDispatch();
  const isLoading = useSelector(getWeekIsLoading);
  const error = useSelector(getWeekIsError);

  const next = () => dispatch(changePageThunkAC(false));
  const prev = () => dispatch(changePageThunkAC(true));

  const handleControllArrow = (e: any) => {
    if (e.code === 'ArrowLeft') {
      prev();
    } else if (e.code === 'ArrowRight') {
      next();
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleControllArrow);

    return () => window.removeEventListener('keydown', handleControllArrow);
  }, []);

  const generateDays = () => {
    if (weekData.length) {
      return (
        <>
          <button className={st.days__prev} onClick={prev}/>
          <div className={st.days__list}>
            {weekData.map((el: any, index: number) =>
              <Day key={`day--${index}`} info={el} temp={el?.temp?.day}/>
            )}
          </div>
          <button className={st.days__next} onClick={next}/>
        </>
      )
    } else {
      return <NoCity/>
    }
  }

  return (
    <div className={st.days}>
      {error
        ? <div className={st.days__error}>{error}</div>
        : <>
          {generateDays()}
          {isLoading && <Loader/>}
        </>
      }
    </div>
  );
};

export default Days;