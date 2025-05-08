import React from 'react'
import IconStar from '../assets/icon-star.svg'

export const RatingCard = ({text}) => {
  return (
    <div>
      <div>
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
      </div>
      <p>{text}</p>
    </div>
  )
}
