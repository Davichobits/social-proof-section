import React from 'react'
import { RatingCard } from './rating-card'

const ratings = [
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech'
]

export const RatingsContainer = () => {

  const positionClasses = ['xl:place-self-start', 'xl:place-self-center', 'xl:place-self-end'];

  return (
    <div className='flex flex-col gap-4 xl:flex-1 justify-center items-start'>
      {
        ratings.map((rating, index) => {

          return(
            <RatingCard key={rating} text={rating} className={positionClasses[index]} />
          )
        })
      }
    </div>
  )
}
