import React from 'react'

const SideBar = () => {
  return (
    <div className='flex text-center p-5'>
      <div className=' transition-all ease-in-out duration-150 delay-100 md:w-96  bg-yellow-400 h-screen  mr-5 w-0'>sidebar</div>
      <div className='bg-green-700 w-screen h-screen'>content</div>
    </div>
  )
}

export default SideBar