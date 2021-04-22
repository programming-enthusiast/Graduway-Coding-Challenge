import React from 'react'

export default React.createContext({
  characters: [],
  setCharacters: undefined,
  languages: [],
  setLanguages: undefined,
  currentCharacter: 0,
  setCurrentCharacter: undefined
})