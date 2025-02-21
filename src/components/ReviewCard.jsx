import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="Custommers" 
        className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='info-text mt-6 max-w-sm text-center'>{feedback}</p>
        <div className='flex justify-center items-center gap-2'>
            <img src={star} alt="star rating" width={25} height={25} />
            <p className='py-2 font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <p className='font-palanquin text-3xl mt-3 font-bold'>{customerName}</p>
    </div>
  )
}

export default ReviewCard