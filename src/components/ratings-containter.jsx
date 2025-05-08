import React from 'react'
import { RatingCard } from './rating-card'

const ratings = [
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech'
]

export const RatingsContainer = () => {
  return (
    <>
      <h2>Rating</h2>
      {
        ratings.map((rating) => {
          return(
            <RatingCard key={rating} text={rating} />
          )
        })
      }
    </>
  )
}
