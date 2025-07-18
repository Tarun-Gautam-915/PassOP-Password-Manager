import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if(passwords){
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])
  

  const showPassword= ()=>{
    passwordRef.current.type = "text"
    if(ref.current.src.includes("icons/eyecross.png")){
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "password"
    }
    else{
      passwordRef.current.type = "text"
      ref.current.src = "icons/eyecross.png"
    }
  }

  const savePassword = ()=>{
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form])

  }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }


  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
    </div>

    <div className="mycontainer">
        <h1 className='text-4xl font-bold text-center'>
            <span className='text-green-500'>&lt;</span>
                    Paas
            <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <div className='flex flex-col text-black p-4 gap-8 items-center'>
            <input value={form.site} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter website URL' type="text" name="site" id="site" />
            <div className="flex w-full gap-3">
              <input value={form.username} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Username' type="text" name="username" id="username" />
              <div className="relative">
                <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Password' type="password" name="password" id="password" />
                <span onClick={showPassword} className='absolute right-[3px] top-[2px] cursor-pointer' >
                  <img ref={ref} className='p-1' width={30} src="/icons/eye.png" alt="eye photo" />
                </span>
              </div>
            </div>
            <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full cursor-pointer border-2 border-green-900 gap-2 w-fit px-8 py-2 active:scale-95'>
              <lord-icon
                  src="https://cdn.lordicon.com/efxgwrkc.json"
                  trigger="hover">
              </lord-icon>
              Add Paasword
            </button>
         </div>

         <div className="passwords">
            <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
            {passwordArray.length === 0 && <div>No Passwords to show</div>}
            {passwordArray.length != 0 && 
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className='bg-green-800 text-white'>
                <tr>
                  <th className='p-2'>Site</th>
                  <th className='p-2'>Username</th>
                  <th className='p-2'>Password</th>
                </tr>
              </thead>
              <tbody className='bg-green-100'>
                {passwordArray.map((item, index)=>{

                  return <tr key={index}>
                  <td className='text-center py-2 border border-white flex justify-center items-center'> <a href={item.site} target='_blank'>{item.site} </a>
                    <div className='size-7 cursor-pointer'>

                      <lord-icon
                          style={{"height": "25px", "width":"25px", "padding-top":"3px", "padding-left":"3px"}}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover">
                      </lord-icon>

                    </div>

                  </td>
                  <td className='text-center w-32 py-2 border border-white'>{item.username} </td>
                  <td className='text-center w-32 py-2 border border-white'>{item.password}</td>
                  </tr>
               
                })}

              </tbody>
            </table> }
         </div>

    </div>
    </>
  )
}

export default Manager
