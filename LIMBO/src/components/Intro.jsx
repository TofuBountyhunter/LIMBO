import React from 'react'
import CustomButton from './CustomButton'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Intro = () => {
  return (
    <>

      <div className=''>

        <div className="bg-[url('./src/assets/11.jpg')] w-full h-screen bg-no-repeat bg-fixed bg-center bg-cover object-cover section">

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className='text-4xl text-white font-bold mt-5 mx-5 fixed z-40'>
            <a href="">LOGO</a>
          </div>

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className='hidden md:flex md:justify-end md:items-center '>
            <div className='md:mt-5 md:mx-5'>
              <CustomButton className="">Log in</CustomButton>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className='flex justify-center items-center flex-col w-full md:h-[90%] h-[100%] md:text-start text-center '>
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

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className='h-screen w-full flex flex-col lg:flex-row justify-around items-center'>

            <div className='xl:w-[38rem] xl:h-[35rem] lg:w-[30rem] lg:h-[35rem] sm:w-[26rem] sm:h-[30rem] w-[300px] h-[27rem] overflow-hidden'>
              <div className=''>

                <div className='xl:w-48 xl:h-60 sm:w-32 sm:h-44  hidden sm:block bg-gray-300 relative xl:top-10 xl:left-20 lg:top-24 lg:left-10 sm:top-24 sm:left-72 overflow-hidden object-cover  rounded-2xl'>
                  <img className='object-cover w-48 h-60 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-1" />
                </div>

                <div className='xl:w-72 xl:h-44 sm:w-56 sm:h-32 hidden sm:block  bg-gray-300 relative xl:top-36 xl:left-80 lg:top-48 lg:left-64 sm:top-24 sm:left-0 overflow-hidden object-cover  rounded-2xl '>
                  <img className='object-cover w-72 h-44 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-2" />
                </div>

                <div className='xl:w-64 xl:h-[350px] sm:w-52 sm:h-72 w-48 h-72 bg-gray-300 relative xl:bottom-80 xl:left-52 lg:bottom-44 lg:left-36 sm:bottom-64 sm:left-28 bottom-[-46px] overflow-hidden object-cover  rounded-2xl sm:z-20'>
                  <img className='object-cover w-64 h-[350px] hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-3" />
                </div>

                <div className='xl:w-48 xl:h-60 sm:w-36 sm:h-52 w-32 h-48 bg-gray-300 relative xl:bottom-[760px] xl:left-96 lg:bottom-[580px] lg:left-80 sm:bottom-[570px] sm:left-0 left-40 bottom-20 overflow-hidden object-cover  rounded-2xl'>
                  <img className='object-cover w-48 h-60 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-4" /></div>
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

        <div className='w-full h-screen bg-green-200 section '>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className='h-screen w-full flex flex-col-reverse lg:flex-row justify-around items-center'>

            <div className='xl:w-[41rem] xl:h-[35rem] lg:w-[30rem] lg:h-[35rem] sm:w-[30rem] sm:h-[16rem] mx-10'>
              <div className='flex flex-col justify-center gap-3 md:gap-5 items-start w-full h-full'>
                <div className='text-green-900 font-bold w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl  text-wrap'>Save the Concepts</div>
                <div className='text-green-900 lg:text-xl text-pretty md:text-xl sm:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur  corrupti, enim placeat officia nam error totam facere vitae laudantium rem perspiciatis libero quis expedita dolorum omnis!</div>
                <div className='flex justify-center items-center w-full'>
                  <CustomButton className="px-4 text-sm md:px-6 lg:px-8 border-green-700 text-green-700 hover:shadow-green-700 hover:bg-green-700">EXPLORE</CustomButton>
                </div>

              </div>
            </div>

            <div className='xl:w-[38rem] xl:h-[35rem] lg:w-[30rem] lg:h-[35rem] sm:w-[26rem] sm:h-[30rem] w-[300px] h-[27rem] overflow-hidden '>
              <div className=''>

                <div className='xl:w-48 xl:h-60 sm:w-32 sm:h-44  hidden sm:block bg-gray-300 relative xl:top-2 xl:left-96 lg:top-20 lg:left-72 sm:top-72 sm:left-64 overflow-hidden object-cover  rounded-2xl'>
                  <img className='object-cover w-48 h-60 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-1" />
                </div>

                <div className='xl:w-64 xl:h-36 sm:w-56 sm:h-32 hidden sm:block  bg-gray-300 relative xl:top-40 xl:left-20 lg:top-40 lg:left-10 sm:top-40 sm:left-5 overflow-hidden object-cover  rounded-2xl '>
                  <img className='object-cover w-72 h-44 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-2" />
                </div>

                <div className='xl:w-64 xl:h-[350px] sm:w-52 sm:h-72 w-48 h-72 bg-gray-300 relative xl:bottom-96 xl:left-20 lg:bottom-72 lg:left-10 sm:bottom-72 sm:left-5 bottom-[-46px] overflow-hidden object-cover  rounded-2xl sm:z-20'>
                  <img className='object-cover w-64 h-[350px] hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-3" />
                </div>

                <div className='xl:w-48 xl:h-60  sm:w-36 sm:h-52 w-32 h-48 bg-gray-300 relative xl:bottom-[440px] xl:left-96 lg:bottom-[300px] lg:left-72 sm:bottom-[530px] sm:left-64 left-40 bottom-20 overflow-hidden object-cover  rounded-2xl'>
                  <img className='object-cover w-48 h-60 hover:scale-105 transition-all duration-300 ease-linear' src="https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Images-4" /></div>
              </div>
            </div>

          </div>

        </div>

        <div className='w-full h-screen bg-slate-800 section '>

          <div className='h-screen w-full flex flex-col-reverse lg:flex-row-reverse justify-around items-center'>

            <div className='xl:w-[45rem] xl:h-[35rem] lg:w-[30rem] lg:h-[35rem] sm:w-[30rem] sm:h-[16rem] mx-10 '>
              <div className='flex flex-col justify-center gap-3 md:gap-5 items-start w-full h-full'>
                <div className='text-slate-500 font-bold w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl  text-wrap'>Create Your Imaginations</div>
                <div className='text-slate-500 lg:text-xl text-pretty md:text-xl sm:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur  corrupti, enim placeat officia nam error totam facere vitae laudantium rem perspiciatis libero quis expedita dolorum omnis!</div>
                <div className='flex justify-center items-center w-full'>
                  <CustomButton className="px-4 text-sm md:px-6 lg:px-8">EXPLORE</CustomButton>
                </div>
              </div>
            </div>

            <div className="mt-3 xl:w-[38rem] xl:h-[30rem] lg:w-[30rem] lg:h-[35rem] sm:w-[26rem] sm:h-[28rem] w-[300px] h-[25rem] overflow-hidden bg-[url('./src/assets/12.jpg')] lg:bg-[url('./src/assets/18.jpg')] bg-no-repeat bg-fixed bg-center bg-cover object-cover ">
              <div className='text-slate-500 flex justify-center items-center h-full'>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  className='lg:w-72 lg:h-14 lg:text-2xl w-64 h-10 text-lg bg-gray-100 rounded-full text-center flex justify-around items-center  font-bold'>
                  <div><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div>Imagine Thoughts</div>
                </div>
              </div>
            </div>

          </div>


        </div>

        <div className='w-full h-screen bg-gray-500 section'>
        </div>

      </div>
    </>
  )
}

export default Intro