import React from 'react'
import CustomButton from './CustomButton'

const Intro = () => {
  return (
    <>

      <div className=''>

        <div className="bg-[url('./src/assets/1.jpg')] w-full h-screen bg-no-repeat bg-fixed bg-center bg-cover object-cover section">

          <div className='text-4xl text-white font-bold mt-5 mx-5 fixed z-40'>
            <a href="">LOGO</a>
          </div>

          <div className='hidden md:flex md:justify-end md:items-center '>
            <div className='md:mt-5 md:mx-5'>
              <CustomButton className="">Log in</CustomButton>
            </div>
          </div>

          <div className='flex justify-center items-center flex-col w-full md:h-[90%] h-[100%] md:text-start text-center'>
            <div className='flex justify-start md:items-start flex-col gap-10'>
              <div className='text-2xl sm:text-3xl md:text-4xl text-white font-bold text-wrap mx-10 md:mx-20 md:text-start'>This is the Important Title!</div>
              <div className='text-sm sm:text-xl md:text-2xl text-white text-wrap mx-10 md:mx-20'>nemo perferendis recusandae atque enim dolorum adipisci neque nulla voluptatibus.</div>
              <div className='w-full flex justify-center md:hidden'>
                <CustomButton className="">Log in</CustomButton>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full h-screen bg-blue-200 section '>

          <div className='h-screen w-full flex flex-col lg:flex-row justify-around items-center'>

            <div className='xl:w-[38rem] xl:h-[35rem] lg:w-[30rem] lg:h-[35rem] sm:w-[26rem] sm:h-[30rem] w-[300px] h-[27rem] overflow-hidden'>
              <div className=''>

                <div className='xl:w-48 xl:h-60 sm:w-32 sm:h-44  hidden sm:block bg-gray-300 relative xl:top-10 xl:left-20 lg:top-24 lg:left-10 sm:top-24 sm:left-72 overflow-hidden object-cover  rounded-2xl'>
                  <img className='object-cover w-48 h-60 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-1" />
                </div>

                <div className='xl:w-72 xl:h-44 sm:w-56 sm:h-32 hidden sm:block  bg-gray-300 relative xl:top-36 xl:left-80 lg:top-48 lg:left-64 sm:top-24 sm:left-0 overflow-hidden object-cover  rounded-2xl '>
                  <img className='object-cover w-72 h-44 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-2" />
                </div>

                <div className='xl:w-64 xl:h-[350px] sm:w-52 sm:h-72 w-48 h-72 bg-gray-300 relative xl:bottom-80 xl:left-52 lg:bottom-44 lg:left-36 sm:bottom-64 sm:left-28 bottom-[-46px] overflow-hidden object-cover  rounded-2xl sm:z-20'>
                  <img className='object-cover w-64 h-[350px] hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-3" />
                </div>

                <div className='xl:w-48 xl:h-60 sm:w-36 sm:h-52 w-32 h-48 bg-gray-300 relative xl:bottom-[760px] xl:left-96 lg:bottom-[580px] lg:left-80 sm:bottom-[570px] sm:left-0 left-40 bottom-20 overflow-hidden object-cover  rounded-2xl'>
                  <img className='object-cover w-48 h-60 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-4" /></div>
              </div>
            </div>

            <div className='xl:w-[41rem] xl:h-[35rem] lg:w-[30rem] lg:h-[35rem] sm:w-[30rem] sm:h-[16rem] mx-10'>
              <div className='flex flex-col justify-center gap-3 md:gap-5 items-start w-full h-full'>
                <div className='text-blue-950 font-bold w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl  text-wrap'>Explore Your Thoughts</div>
                <div className='text-blue-950 lg:text-xl text-pretty md:text-xl sm:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur  corrupti, enim placeat officia nam error totam facere vitae laudantium rem perspiciatis libero quis expedita dolorum omnis!</div>
                <div className='flex justify-center items-center w-full'>
                  <CustomButton className="px-4 text-sm md:px-6 lg:px-8">EXPLORE</CustomButton>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full h-screen bg-green-200 section'>
        </div>

        <div className='w-full h-screen bg-gray-200 section'>
        </div>

      </div>
    </>
  )
}

export default Intro