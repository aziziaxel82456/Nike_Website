import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../Constants'
import { footerLinks } from '../Constants'
import { copyrightSign } from '../assets/icons'
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} width={150} height={46} /></a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon)=>(
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img src={icon.src} alt={icon.alt} 
                  width={25}
                  height={25}/>
                </div>
            ))}
          </div>
        </div>
        <div className=' flex flex-1 justify-between lg:gap-12 gap-20 flex-wrap'>
          {footerLinks.map((link)=>(
            <div key={link.title}>
              <h4 className='text-2xl font-palanquin text-white font-medium mb-6 leading-normal'>{link.title}</h4>
              <ul>
                {link.links.map((l)=>(
                  <li key={l.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'><a href="">{l.name}</a></li>
                ))}
              </ul>
            </div>
              
          ))}
        </div>

      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-start '>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat'> 
          <img src={copyrightSign} alt="Copyright Sign" width={20} height={20} className='rounded-full m-0'/>
          <p>Copyright. All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Condition</p>
      </div>
    </footer>
  )
}

export default Footer