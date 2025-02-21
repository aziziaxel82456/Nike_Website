import React from 'react'

const Button2 = ({label}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg rounded-full bg-white  border-gray-200 text-slate-gray leading-none hover:bg-gray-200 hover:text-white mb-10">
        {label}
    </button>
  )
}

export default Button2