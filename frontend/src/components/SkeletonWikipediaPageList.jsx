import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function SkeletonWikipediaPageList() {
  return (
    <div className="pages-list__container">
      <div className="pages-list__header">
        <div className="pages-list__title">
          <Skeleton/>
        </div>
      </div>
      <div>
        {
          [1, 2, 3, 4, 5].map((item, index) =>
            <div className="pages-list-item" style={{ border: "1px solid black"}} key={index}>
              <Skeleton/>
            </div>
          )
        }
      </div>
    </div>
  )
}