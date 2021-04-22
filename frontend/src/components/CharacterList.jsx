import React, { useState, useContext } from 'react'
import DataContext from '../contexts/DataContext'

export default function CharacterList() {

  const { characters, currentCharacter, setCurrentCharacter } = useContext(DataContext)

  const handleCharacterClick = (index) => {
    setCurrentCharacter(index)
  }

  return (
    <div className="character-list__container">
      <div className="character-list__header">
        <div className="character-list__title">Famous People</div>
      </div>
      <div>
        {
          characters.map((character, index) => {
            return (
              <div className={`character-list-item current ${currentCharacter === index ? 'selected' : ''}`} 
                key={index} 
                onClick={() => handleCharacterClick(index)}
              >
                {character.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}