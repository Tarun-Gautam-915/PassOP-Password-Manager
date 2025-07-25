import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

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
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){

    setPasswordArray([...passwordArray, {...form, id:uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
    console.log([...passwordArray, form])
    setForm({site:"", username:"", password:""})
    toast('Password Saved Sucessfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition:Bounce
    });
    }
    else{
      toast.error('Error: Password not Saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

  }

  const deletePassword = (id)=>{
    console.log("Deleting password with the id", id)
    let c = confirm("Do you really want to delete this password?")
    if(c){
      setPasswordArray(passwordArray.filter(item=>item.id!=id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!=id)))
    }
    toast('Password Deleted Sucessfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition:Bounce
    });
    
  }

  const editPassword = (id)=>{
    console.log("Editing password with the id", id)   
    setForm(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!=id))
    // toast('Password Edited Sucessfully!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   transition:Bounce
    // });    
    
  }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }

  const copyText = (text)=>{
    toast('Copied to Clipboard!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition:Bounce
    });
    navigator.clipboard.writeText(text)
  }


  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition="Bounce"
    />
    <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
    </div>

    <div className="mycontainer p-3 min-h-[87.2vh]">
        <h1 className='text-4xl font-bold text-center'>
            <span className='text-green-500'>&lt;</span>
                    Paas
            <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <div className='flex flex-col lordiconcopy text-black p-4 gap-8 items-center'>
            <input value={form.site} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter website URL' type="text" name="site" id="site" />
            <div className="flex flex-col md:flex-row w-full justify-between gap-8">
              <input value={form.username} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Username' type="text" name="username" id="username" />
              <div className="relative">
                <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Password' type="password" name="password" id="password" />
                <span onClick={showPassword} className='absolute right-[3px] top-[2px] cursor-pointer' >
                  <img ref={ref} className='p-1' width={30} src="/icons/eye.png" alt="eye photo" />
                </span>
              </div>
            </div>
            <button onClick={savePassword} className='lordiconcopy flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full cursor-pointer border-2 border-green-900 gap-2 w-fit px-8 py-2 active:scale-95'>
              <lord-icon
                  src="https://cdn.lordicon.com/efxgwrkc.json"
                  trigger="hover">
              </lord-icon>
              Save
            </button>
         </div>

         <div className="passwords">
            <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
            {passwordArray.length === 0 && <div>No Passwords to show</div>}
            {passwordArray.length != 0 && 
            <table className="table-auto w-full overflow-hidden rounded-md mb-10">
              <thead className='bg-green-800 text-white'>
                <tr>
                  <th className='p-2'>Site</th>
                  <th className='p-2'>Username</th>
                  <th className='p-2'>Password</th>
                  <th className='p-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-green-100'>
                {passwordArray.map((item, index)=>{

                  return <tr key={index}>
                  <td className='text-center py-2 border border-white'> 
                  <div className="lordiconcopy flex justify-center items-center" onClick={()=>{copyText(item.site)}}>
                    <a href={item.site} target='_blank'>{item.site} </a>
                    <div className='size-7 cursor-pointer'>
                      <lord-icon
                          style={{"height": "25px", "width":"25px", "paddingTop":"3px", "paddingLeft":"3px"}}
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover">
                      </lord-icon>
                    </div>
                  </div>
                  </td>
                  <td className='text-center py-2 border border-white'>
                    <div className="lordiconcopy flex justify-center items-center" onClick={()=>{copyText(item.username)}}>
                      <span>{item.username}</span>
                      <div className='size-7 cursor-pointer'>
                        <lord-icon
                            style={{"height": "25px", "width":"25px", "paddingTop":"3px", "paddingLeft":"3px"}}
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover">
                        </lord-icon>
                      </div>    
                    </div>
                  </td>
                  <td className='text-center py-2 border border-white'>
                    <div className="lordiconcopy flex justify-center items-center" onClick={()=>{copyText(item.password)}}>
                      <span>{item.password}</span>
                      <div className='size-7 cursor-pointer'>
                        <lord-icon
                            style={{"height": "25px", "width":"25px", "paddingTop":"3px", "paddingLeft":"3px"}}
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='text-center py-2 border border-white'>
                    <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                      <lord-icon
                        style={{"height": "25px", "width":"25px"}}
                        src="https://cdn.lordicon.com/erxuunyq.json"
                        trigger="hover">
                      </lord-icon>
                    </span>
                    <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
                      <lord-icon
                          style={{"height": "25px", "width":"25px"}}
                          src="https://cdn.lordicon.com/xyfswyxf.json"
                          trigger="hover">
                      </lord-icon>
                    </span>
                  </td>
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
