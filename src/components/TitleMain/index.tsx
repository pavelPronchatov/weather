import React from 'react'

import st from './index.module.scss'

const TitleMain = () => {
  return (
    <div className={st.title}>
      <span className={st.title__weather}>Weather</span>
      <span className={st.title__forecast}>forecast</span>
    </div>
  )
}

export default TitleMain
