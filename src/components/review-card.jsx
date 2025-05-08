import React from 'react'

export const ReviewCard = ({name, imgUrl, buyerType, review}) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt="" />
        <div>
          <p>{name}</p>
          <p>{buyerType}</p>
        </div>
        <p>{review}</p>
      </div>
    </div>
  )
}
