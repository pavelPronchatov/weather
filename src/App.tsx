// eslint-disable-next-line no-use-before-define
import React from 'react'
import TitleMain from './components/TitleMain'
import WeekDays from 'components/WeekDays'

import './App.scss'
import DateInPast from 'components/DateInPast'
import { WidthProvider } from 'context/resizeContext'

function App () {
  const breakPoints = {
    notebook: 1366,
    tablet: 1200,
    mobile: 500
  }

  return (
    <WidthProvider breakPoints={breakPoints}>
      <div className="App">
        <div className="container">
          <TitleMain/>
          <div className="App__wrapper">
            <WeekDays/>
            <DateInPast/>
          </div>
        </div>
      </div>
    </WidthProvider>
  )
}

export default App
