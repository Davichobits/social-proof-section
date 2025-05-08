import React from 'react'
import { RatingCard } from './rating-card'

const ratings = [
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech'
]

export const RatingsContainer = () => {
  return (
    <div className='flex flex-col gap-4 mb-12'>
      {
        ratings.map((rating) => {
          return(
            <RatingCard key={rating} text={rating} />
          )
        })
      }
    </div>
  )
}
