import { Button } from "../components"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-col justify-start items-start lg:w-[50%]'>
      <h2 className='font-palanquin text-4xl capitalize font-bold lg: max-w-lg'>We provide you
        <span className='text-coral-red'> Super Quality </span>
        Shoes
      </h2>
      <p className='info-text lg:max-w-lg mt-5 max-lg:max-w-[80%]'>Ensuring premium comfort and style, our meticulously  crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
      <p className='info-text  lg:max-w-lg mt-6 max-lg:max-w-[80%] mb-10'>Our dedication to detail and excellence ensures your satisfaction</p>
      <Button label={"View details"} iconURL={arrowRight}/>
      </div>

      <div className="flex flex-1 justify-center items-center sm:justify-start w-full lg:justify-center">
        <img src={shoe8} alt="another Shoe" />
      </div>


    </section>
  )
}

export default SuperQuality