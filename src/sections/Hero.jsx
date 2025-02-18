import React from 'react'
import { Button } from '../components'
import { arrowRight } from '../assets/icons'
import {statistics} from "../Constants"

const Hero = () => {
  return (
    <section id='home' className=' w-full min-h-screen flex  xl:flex-row sm:flex-col justify-center items-center gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
    
        <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
        <h1 className='font-palanquin text-8xl'><span>The New Arrival</span><br /><span>Nike</span> Shoes</h1>
        <p>Discover stylish Nike arrivals, quality confort, and innovation for your active life</p>
         <Button label="Show now" iconURL={arrowRight } />
        <div className="  flex justify-start items-start w-full mt-20 gap-16">
        {statistics.map((stat,index) => (
          <div key={stat.label}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  )
}

export default Hero