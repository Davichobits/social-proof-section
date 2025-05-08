import React from 'react'
import IconStar from '../assets/images/icon-star.svg'

export const RatingCard = ({text}) => {
  return (
    <div className='bg-Light-Grayish-Magenta rounded-lg p-4'>
      <div className='flex place-content-center gap-2 mb-4'>
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
        <img src={IconStar} alt="Icon star" />
      </div>
      <p className='text-center text-[1.0625rem] text-Very-Dark-Magenta font-bold'>{text}</p>
    </div>
  )
}
