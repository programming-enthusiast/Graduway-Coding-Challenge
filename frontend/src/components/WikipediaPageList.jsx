import React, { useContext } from 'react'
import DataContext from '../contexts/DataContext'

export default function WikipediaPageList() {
  const { characters, currentCharacter } = useContext(DataContext)

  return (
    <div className="pages-list__container">
      <div className="pages-list__header">
        <div className="pages-list__title">
          Wikipedia pages for {characters[currentCharacter] ? characters[currentCharacter].name : ''}
        </div>
      </div>
      <div>
        {
          characters[currentCharacter] ? 
            characters[currentCharacter].pageInfo.map((page, index) => {
              return (
                <div className="pages-list-item" key={index}>
                  {page.langName} <a href={page.link}>Link</a> Word count: {page.wordCount}
                </div>
              )
            })
          : null
        }
      </div>
    </div>
  )
}