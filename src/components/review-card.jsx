import React from 'react'

export const ReviewCard = ({name, imgUrl, buyerType, review}) => {
  return (
    <div className='bg-Very-Dark-Magenta text-Light-Grayish-Magenta rounded-lg px-8 py-10'>
      <div className='flex gap-6 mb-6'>
        <img className='size-10 rounded-full' src={imgUrl} alt="" />
        <div className='text-[1.0625rem]'>
          <p className='font-bold'>{name}</p>
          <p className='text-Soft-Pink'>{buyerType}</p>
        </div>
      </div>
      <p className='font-medium text-[.9375rem]/[1.375rem]'>{review}</p>
    </div>
  )
}
