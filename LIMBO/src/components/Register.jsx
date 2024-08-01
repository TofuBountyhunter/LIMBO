import React from 'react'
import { useState } from 'react';

const Register = () => {
  let [defpassowrt, setDefpassword] = useState('password');
  let [eyeicon, setEyeicon] = useState('fa-solid fa-eye-slash');

  const see = () => {
    if (defpassowrt === 'password') {
      setDefpassword('text');
      setEyeicon('fa-solid fa-eye cursor-pointer w-5');
    }
    if (defpassowrt === 'text') {
      setDefpassword('password');
      setEyeicon('fa-solid fa-eye-slash cursor-pointer w-5');
    }
  }
  return (
    <>
      <div className="lg:w-[800px] lg:min-h-[550px] md:w-[700px] md:min-h-[400px] w-[500px] min-h-[550px]   bg-slate-700 rounded-3xl m-5 shadow-lg shadow-black/50 overflow-hidden">
        <div className="md:bg-[url('./src/assets/19.jpg')] lg:w-full lg:h-[550px] md:w-full md:min-h-[400px] min-h-[550px] bg-no-repeat bg-fixed bg-center bg-cover object-cover ">
          <div className='lg:w-[400px] lg:h-[552px] md:w-[350px] md:min-h-[402px] min-h-[550px] bg-slate-900'>

            <div className='flex justify-center items-center text-white'>
              <form action="" method="">

                <div className='text-yellow-500 flex justify-center items-center mb-14 mt-6 lg:text-[35px] md:text-[28px] font-bold text-[28px]'>Register</div>

                <div className='bg-slate-700  mb-6 rounded-lg px-3 py-2 flex justify-center items-center w-fit h-fit md:mx-5 ml-3 lg:mx-0'>
                  <label htmlFor="email" className=''></label>
                  <input className='form_textfield bg-slate-700 outline-none text-sm h-5 w-52 md:h-6 md:w-56 lg:h-8 lg:w-72  text-white md:text-lg font-semibold mr-3' type="email" name="email" required placeholder="E-Mail" />
                  <i class="fa-solid fa-envelope cursor-pointer w-5"></i>
                </div>

                <div className='bg-slate-700  mb-6 rounded-lg px-3 py-2 flex justify-center items-center w-fit h-fit md:mx-5 ml-3 lg:mx-0'>
                  <label htmlFor="password" className='none'></label>
                  <input className='form_textfield bg-slate-700 outline-none text-white text-sm h-5 w-52 md:h-6 md:w-56 lg:h-8 lg:w-72 md:text-lg font-semibold mr-3' type={defpassowrt} name="passsword" required placeholder="Password" />
                  <i onClick={see} class={eyeicon}></i>
                </div>


                <div className='md:text-[14px] lg:text-[16px] font-light text-yellow-500 mb-6 md:mx-5 text-[12px] mx-3 lg:mx-0'>
                  <a href="">Forget Password ?</a>
                </div>

                <div className='mb-6 mx-3 md:mx-5 lg:mx-0'>
                  <button className='font-semibold text-white text-[12px] md:text-[14px] lg:text-[16px] transition-all duration-300 ease-linear
                                         bg-transparent bg-yellow-600 rounded-lg px-8  md:px-10 lg:px-14 py-2 shadow-allShadow
                                         shadow-yellow-500/50 hover:scale-105 active:scale-100'>Login</button>
                </div>
                <  hr />
                <div className='flex justify-center items-center mt-8 mb-3 '>
                  <button className='font-semibold text-red-500 lg:text-normal md:text-sm transition-all duration-300 ease-linear
                                           bg-transparent border-red-500 border-2 px-8 py-2 hover:shadow-allShadow
                                         hover:shadow-red-700 hover:bg-red-700 hover:border-red-700 hover:text-white active:scale-95'>
                    <i class="mr-3 fa-brands fa-google-plus-g"></i>
                    Register with Google
                  </button>
                </div>

                <div className='flex justify-center items-center md:text-[14px] lg:text-normal text-[12px]  mt-10 mb-5'>
                  <div className='text-gray-500'>Already have an Account?<a className='md:text-[14px] lg:text-normal font-light text-yellow-500 mb-6' href=""> Login here</a></div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register


