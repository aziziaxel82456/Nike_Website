import { arrowRight } from "../assets/icons"
import { Button } from "../components"
const Subscribe = () => {
  return (
    <section className="flex justify-between max-container flex-col gap-10 items-center" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md text-center font-palanquin font-bold">Sign up for
        <span className="text-coral-red"> Update </span>
        & Newsletter
      </h3>
      <div className="flex items-center justify-center gap-4 w-full">
      <div className="flex justify-center items-center max-w-[60%] border-2 rounded-3xl py-5 w-full hover:border-coral-red">
        <input type="text" placeholder="Subscribe@nike.com" className="input text-lg text-center  outline-none border-0 "/>  
      </div>
      <div className="flex ">
      <button type="submit" className=" font-montserrat text-xl bg-coral-red text-white py-4 px-10 border-2 border-coral-red flex min-w-[200px] justify-between rounded-3xl outline-none " >SignUp
        <img src={arrowRight} width={25}
        height={25} />
      </button>
      </div>
      </div>
    </section>
  )
}

export default Subscribe