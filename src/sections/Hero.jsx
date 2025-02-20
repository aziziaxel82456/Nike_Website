import React from 'react'
import { Button } from '../components'
import { arrowRight } from '../assets/icons'
import {statistics} from "../Constants"
import { bigShoe1 } from '../assets/images'
import ShoesCard from '../components/ShoesCard'


const Hero = () => {
  return (
    <section id='home' className='w-full min-h-screen flex xl:flex-row xl:pt-0.5 flex-col justify-center items-center gap-10 max-container pt-28'>
      {/* Coté droit */}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x z-10 '>
    
        <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
        <h1 className='font-palanquin text-8xl mt-10 max-sm:text-[80px] max-sm:leading-[85px]  font-bold'>
          <span className='relative xl:bg-white xl:whitespace-nowrap pr-10 z-8'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3 '>Nike </span> Shoes 
           </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-10'>Discover stylish Nike arrivals, quality confort, and innovation for your active life</p>
         <Button label="Show now" iconURL={arrowRight } />
        <div className="  flex justify-start items-start w-full mt-20 gap-16">
        {statistics.map((stat,index) => (
          <div key={stat.label}>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='text-slate-gray font-montserrat leading-8'>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
      {/* coté gauche */}
      <div className='relative flex-1 flex justify-center items-center max-md:min-h-[700px] xl:min-h-screen max-xl:py-30 bg-primary bg-hero bg-cover z-9
      sm:w-full md:py-10'>
        <img 
        src={bigShoe1}
        width={600}
        height={600}
        // object contain dit que limage doit fit sa taille
        className='relative object-contain z-9'
         alt="shoes image" />
      {/* card section sheos  */}
        <ShoesCard />

      </div>
      
      
      
    </section>
  )
}

export default Hero