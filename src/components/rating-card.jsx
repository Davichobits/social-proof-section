import React from 'react'
import IconStar from '../assets/images/icon-star.svg'

export const RatingCard = ({text, className}) => {
  return (
    <div className={`bg-Light-Grayish-Magenta rounded-lg p-4 xl:w-[445px] xl:flex xl:justify-center xl:items-center xl:gap-8 ${className}`}>
      <div className='flex place-content-center gap-2 mb-4 xl:mb-0'>
        <img className='size-4' src={IconStar} alt="Icon star" />
        <img className='size-4' src={IconStar} alt="Icon star" />
        <img className='size-4' src={IconStar} alt="Icon star" />
        <img className='size-4' src={IconStar} alt="Icon star" />
        <img className='size-4' src={IconStar} alt="Icon star" />
      </div>
      <p className='text-center text-[1.0625rem] text-Very-Dark-Magenta font-bold'>{text}</p>
    </div>
  )
}
