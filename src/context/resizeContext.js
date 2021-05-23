import React, { useContext, useEffect, useState } from 'react'

const WidthContext = React.createContext();
export const useWidthContext = () => {
  return useContext(WidthContext)
}

export const WidthProvider = ({ children, breakPoints }) => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleSubscribe = () => {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  const getIsNotebook = () => width <= breakPoints.notebook
  const getIsTablet = () => width <= breakPoints.tablet
  const getIsMobile = () => width <= breakPoints.mobile

  const resizeValue = {
    isNotebook: getIsNotebook(),
    isTablet: getIsTablet(),
    isMobile: getIsMobile()
  }

  useEffect(() => {
    window.addEventListener('resize', handleSubscribe)

    return () => window.addEventListener('resize', handleSubscribe)
  }, [])

  return (
    <WidthContext.Provider value={resizeValue}>
      {children}
    </WidthContext.Provider>
  )
}