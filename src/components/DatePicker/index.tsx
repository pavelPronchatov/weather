import React from 'react'

import st from './index.module.scss'

type DatePickerProps = {
  value: string
  setValue: (date: string) => void
}

const DatePicker: React.FC<DatePickerProps> = ({value, setValue}) => {
  const date = new Date();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div className={st['date-picker']}>
      <input
        type="date"
        className={st['date-picker__input']}
        max={date.toDateString()}
        placeholder="Select date"
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  )
}

export default DatePicker