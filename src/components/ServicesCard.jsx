const ServicesCard = ({image,label,subtext,id}) => {
  return (
    <div className='flex-1 flex-col items-center sm:w-[350px] sm:min-w-[350px] justify-center flex  w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className="flex w-10 h-11 justify-center items-center bg-coral-red rounded-full">
            <img src={image} 
            alt={label}
            width={30}
            height={30}
             />
        </div>
        <h3 className="mt-5 font-palanquin font-bold leading-normal text-3xl ">{label}</h3>
        <p className="items-center text-base break-words font-montserrat leading-normal text-slate-gray mt-6 ">{subtext}</p>

    </div>
  )
}

export default ServicesCard