import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex items-center justify-between px-4 py-5 h-14">
            <div className='logo font-bold text-2xl'>
                <span className='text-green-500'>&lt;</span>
                    Paas
                <span className='text-green-500'>OP/&gt;</span>
            </div>
                {/* <ul>
                    <li className='flex gap-8'>
                        <a className='hover:font-bold cursor-pointer' href='/'>Home</a>
                        <a className='hover:font-bold cursor-pointer' href='/contact'>Contact</a>
                        <a className='hover:font-bold cursor-pointer' href='/about'>About</a>
                    </li>
                </ul> */}
                <button className='text-white bg-green-500 rounded-full flex justify-center items-center cursor-pointer my-5 active:scale-90 ring-1 ring-white'>
                    <img className='invert w-10' src="icons/github.png" alt="Github logo" />
                    <span className='font-bold px-2'>Github</span>
                </button>
            </div>
    </nav>
  )
}

export default Navbar
