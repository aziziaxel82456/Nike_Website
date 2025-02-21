import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"
import Button2 from "../components/Button2"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1 min-w-[50%]">
        <img src={offer} width={773}
        height={687} 
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-col justify-start items-start">
        <h2 className="font-palanquin text-4xl font-bold max-w-[80%] pb-10">
          We provide you
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className="info-text pb-4">Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
        <p className="info-text pb-10">Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
        <div className="flex gap-10">
          <Button label={"View details"} iconURL={arrowRight}/>
          <Button2 label={"Learn more"} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer