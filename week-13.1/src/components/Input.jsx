import React from 'react'

const Input = ({onClick, type, placeholder}) => {
  return (
   <span onClick={onClick} className={`p-8 text-4xl px-2 py-2 text-white cursor-pointer bg-blue-200 rounded-2xl`}>
   <input type={type} placeholder={placeholder} className='bg-blue-200 outline-none'/>
 </span>
  )
}

export default Input