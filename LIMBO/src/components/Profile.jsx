import React from 'react'
import CustomButton from './CustomButton'
import MainNavbar from './MainNavbar';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <>

      <div className=''>
        <div className='dark:bg-gray-900 dark:text-gray-100 h-screen '>
          <div className='w-full h-[70px] bg-black mb-5'></div>

          <div className='flex flex-col justify-center items-center mt-2'>

            <div className='h-32 bg-gray-500 rounded-[50%] w-32 overflow-hidden'>
              <img src="" alt="" className='' />
            </div>

            <div className='mt-4 flex items-center justify-center  gap-3'>
              <div className='font-semibold text-4xl '>Tofu_008</div>
            </div>

            <div className='text-black dark:text-gray-100 mt-6 flex justify-center items-center gap-2'>
              <div>followres</div>.<div>followings</div>
            </div>
            <div className='font-medium text-lg mt-6'>
              <button className='transition-all duration-100 ease-linear rounded-3xl text-black bg-gray-200 w-20 h-10 hover:bg-gray-300 active:scale-95'>
                <NavLink to="">Edit</NavLink>
              </button>
            </div>

            <div className='font-medium text-base flex justify-center items-center gap-12 mt-14 mb-10'>
              <div className=''>
                <NavLink to="created" className={({ isActive }) => ` transition-all duration-100 ease-linear px-3 py-2 rounded-xl  ${isActive ? "bg-black text-white hover:bg-black dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-100" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-gray-900 "}`}>Created</NavLink>
              </div>
              <div className=''>
                <NavLink to="saved" className={({ isActive }) => ` transition-all duration-100 ease-linear px-3 py-2 rounded-xl  ${isActive ? "bg-black text-white hover:bg-black dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-100" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-gray-900 "}`}>Saved</NavLink>
              </div>
            </div>
            <Outlet></Outlet>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile