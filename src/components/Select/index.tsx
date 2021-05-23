import React, { useState } from 'react'
import { CityType } from 'types'

import st from './index.module.scss'

type SelectProps = {
  selectValues?: Array<CityType>
  setValue: (city: CityType) => void
  value: string
  className?: string
}

const Select: React.FC<SelectProps> = ({ selectValues, setValue, value, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const isOpenClass = () => isOpen ? st.active : '';

  const handleClick = (city: CityType) => () => {
    setValue(city);
    close();
  };

  return (
    <div className={`${st.select} ${className} ${isOpenClass()}`}>
      <input
        type="text"
        name="select"
        className={st.select__value}
        value={value}
        placeholder="Select city"
        readOnly
      />
      <button
        className={st.select__btn}
        onClick={open}
      />
      <div className={st.select__list}>
        {selectValues?.map((city, index) =>
          <button
            key={`weekday--${index}`}
            className={st.select__item}
            onClick={handleClick(city)}
          >{city.name}</button>
        )}
      </div>
    </div>
  )
};

export default Select
