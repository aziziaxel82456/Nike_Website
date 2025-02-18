const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full bg-coral-red text border-coral-red text-white leading-none">
        {label}

        <img 
        src={iconURL} 
        alt="icon URL" 
        className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button