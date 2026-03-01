import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Login = ({handleLogin}) => {

    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")
  
    const submitHandler= (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }
    

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-2xl border-emerald-600 p-20'>

                {/* ✅ Title added — same emerald color scheme */}
                <div className='flex flex-col items-center mb-8'>
                    <h1 className='text-4xl font-bold text-emerald-500 tracking-wide'>EMS</h1>
                    <p className='text-emerald-700 text-sm tracking-widest uppercase mt-1'>Employee Management System</p>
                    <div className='w-16 h-0.5 bg-emerald-600 mt-4 rounded-full'></div>
                </div>

                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}  
                className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e)=>{
                       setemail(e.target.value)
                    }}
                    className='outline-none border-2 border-emerald-600 rounded-full text-xl py-4 px-5 placeholder:text-white' 
                    type='email' placeholder='Enter Your email'></input>
                    <input
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    className='outline-none border-2 border-emerald-600 rounded-full text-xl py-4 px-5 mt-7 placeholder:text-white'
                    type='password' placeholder='Enter Your password'></input>
                    <button className='outline-none mt-8 w-67 bg-emerald-600 rounded-full text-xl py-4 px-5 placeholder: text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login