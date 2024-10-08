import React from 'react'
import Login from './Login'
import Register from './Register'
import { Outlet } from 'react-router-dom'

const Form = () => {

    return (
        <>
            <div className='bg-gradient-to-r from-slate-900 to-slate-800 w-full h-screen'>
                {/* <div className="bg-[url('./src/assets/12.jpg')] w-full h-screen bg-no-repeat bg-fixed bg-center bg-cover object-cover"> */}
                <div className='text-4xl text-white font-bold mt-5 mx-5 fixed z-40'>
                    <a href="">LOGO</a>
                </div>
                <div className='flex justify-center items-center w-full h-screen'>
                    {/* <Login></Login> */}
                    {/* <Register></Register> */}
                    {/* <Outlet></Outlet> */}

                </div>
            </div>

        </>
    )
}

export default Form 
