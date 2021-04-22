import React, { useState } from 'react'
import StateContext from './StateContext'

export default function StateProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <StateContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </StateContext.Provider>
  )
}