import React, { useState } from 'react'
import DataContext from './DataContext'

export default function DataProvider({ children }) {
  const [characters, setCharacters] = useState([])
  const [languages, setLanguages] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(0)

  return (
    <DataContext.Provider value={{characters, setCharacters, languages, setLanguages, currentCharacter, setCurrentCharacter}}>
      {children}
    </DataContext.Provider>
  )
}