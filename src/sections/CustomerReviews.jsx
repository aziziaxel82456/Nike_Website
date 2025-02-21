import React from 'react'
import { reviews } from '../Constants'
import {ReviewCard} from '../components'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <div>
        <h3 className='font-palanquin text-center text-4xl font-bold'>
          What Our
          <span className='text-coral-red'> Customers </span>
          Say?
        </h3>
        <p className='info-text pt-6 text-center m-auto max-w-[60%] break-words'> Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
      </div>
      <div className='mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((rev)=>(
          <ReviewCard 
          key={rev.customerName}
          imgURL={rev.imgURL}
          customerName={rev.customerName}
          rating={rev.rating}
          feedback={rev.feedback}
          />
        ))}

      </div>
    </section>
  )
}

export default CustomerReviews