import { cards } from "../Constants"
const ShoesCard = () => {
  return (
    <div className="flex flex-1 justify-center absolute -bottom-[15%] gap-4 sm:gap-6 max-sm:max-w-[500px] md:max-w-[600px] lg:-bottom-[10%]">
        {cards.map((shoe)=>(
        <div className=" object-contain " key={shoe}>
            <img 
            src={shoe.image} 
            alt={shoe.id} 
            width={200}
            height={200}
            className="hover:border-2 rounded-3xl hover:border-coral-red"
            />
        </div>
    ))}
    </div>
  )
}

export default ShoesCard