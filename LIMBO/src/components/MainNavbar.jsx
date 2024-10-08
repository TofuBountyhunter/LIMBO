import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const MainNavbar = () => {
    let [theme,setTheme]=useState("Light");
    let [icontheme,setIcontheme]=useState("fa-solid fa-sun pl-1");
    
    const themeChange = () => {
        if(theme === "Light"){
            setTheme("Dark")
            setIcontheme("fa-solid fa-moon pl-1")
        }
        if(theme === "Dark"){
            setTheme("Light")
            setIcontheme("fa-solid fa-sun pl-1")
        }
    }


    return (
        
        <>
            {/* <div className='w-full h-screen bg-white'> */}
            <div className='bg-white w-full p-2 fixed dark:bg-gray-800 dark:text-white'>
                <div className='flex justify-around items-center text-base font-medium capitalize'>

                    <div className=' w-fit cursor-pointer h-10 flex justify-center items-center py-7'>
                        <div className='text-4xl text-black font-bold dark:text-white'>
                            <a href="">LOGO</a>
                        </div>
                    </div>

                    <div className=' w-fit cursor-pointer h-10 flex justify-center items-center py-7'>
                        <NavLink className={({ isActive }) => `px-4 py-3 rounded-3xl ${isActive ? "bg-black text-white dark:bg-gray-100 dark:text-gray-900" : ""}`} to='home'>Home</NavLink>
                    </div>

                    <div className='h-10 flex justify-center items-center py-7'>
                        <input type="search" placeholder='Search' className='transition-all duration-100 ease-linear w-[800px] outline-none rounded-3xl bg-gray-200 px-5 py-2 hover:bg-gray-300 rounded-r-none dark:bg-gray-700 dark:hover:bg-gray-600' />
                        <button className='group rounded-3xl bg-gray-200 px-5 py-1 hover:bg-gray-300 rounded-l-none dark:bg-gray-700 dark:hover:bg-gray-600'><i class="fa-solid fa-magnifying-glass group-hover:scale-110  group-active:scale-100 transition-all duration-200 ease-linear py-2 "></i></button>
                    </div>

                    <div className='flex justify-center items-center'>
                        <NavLink className={({ isActive }) => `cursor-pointer bg-gray-500 rounded-[50%] w-12 h-12 flex justify-center items-center hover:opacity-85 overflow-hidden object-cover ${isActive ? "object-cover overflow-hidden border-4 border-black dark:border-gray-400" : ""}`} to='profile'>
                            <img className='' src="https://images.pexels.com/photos/20766290/pexels-photo-20766290/free-photo-of-insta-mhrb_zhb.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </NavLink>
                    </div>


                    <div className='flex justify-center items-center'>
                        <button onClick={themeChange} className='font-semibold transition-all duration-200 ease-linear text-black
                                         bg-transparent bg-gray-400 dark:text-white dark:bg-gray-600 rounded-lg hover:bg-gray-500 active:scale-95 w-20 h-10'>{theme} <i class={icontheme}></i></button>
                    </div>
                    <div className=' w-fit cursor-pointer h-10 flex justify-center items-center'>
                        <NavLink to='upload'>
                            <div title='Upload' className='hover:scale-105 active:scale-100 transition-all duration-200 ease-linear bg-purple-800 rounded-sm w-16 h-12 flex justify-center items-center'><i class="fa-solid fa-plus" style={{ color: "#ffffff", }}></i></div>
                        </NavLink>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default MainNavbar
