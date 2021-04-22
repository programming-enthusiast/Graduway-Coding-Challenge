import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function SkeletonCharacterList() {
  return (
    <div className="character-list__container">
      <div className="character-list__header">
        <div className="character-list__title">Famous People</div>
      </div>
      <div>
        {
          [1, 2, 3, 4, 5].map((item, index) => 
            <div 
              className="character-list-item" 
              key={index} 
            >
              <Skeleton/>
            </div>
          )
        }
      </div>
    </div>
  )
}