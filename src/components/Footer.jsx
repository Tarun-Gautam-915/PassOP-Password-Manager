import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white text-center w-full'>
        <div className='logo font-bold text-2xl'>
            <span className='text-green-500'>&lt;</span>
                Paas
            <span className='text-green-500'>OP/&gt;</span>
        </div>

        <div className='flex gap-2 justify-center items-center mt-1'>
            Created with <img src="icons/heart.png" alt="heart" width={25} /> by Tarun
        </div>
    </div>
  )
}

export default Footer
