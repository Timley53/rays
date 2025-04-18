import React from 'react'
import about_us_image from '../assets/about_us.jpeg'

function AboutUs() {
  return (
    <div className='w-screen md:h-screen h-full
     flex flex-col md:flex-row bg-black md:pt-10 p-0 justify-center'>
        <div className="about_us flex flex-col justify-center items-start bg-[#000000] text-white md:w-[35%] md:mx-10 text-left order-2 md:order-1 p-4 ">
            <h1 className='text-4xl font-bold'>About Us</h1>
            <p className='text-lg text-white mt-4 md:max-w-[400px] w-[90%] py-5'>At <span className='font-bold text-[1.6rem]'>Rays</span>,  we believe great food brings people together. Our dishes are inspired by time
honored recipes, preparedwith passion, and served with warmth. Whether you’re here for
a quick bite or a memorable dining experience, every meal is crafted with love.</p>

            <span className='md:mt-10 '>
            <button className=' hidden md:flex p-2 px-4 border-2 rounded-lg border-white hover:opacity-60 transition-all text-white cursor-pointer'>Learn More about us</button>

            <button className='px-4 py-4 border-2 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-all border-white cursor-pointer md:hidden'>
              Read more
            </button>
            </span>
        </div>

        <div className="about_us_image  flex justify-center items-center h-full md:w-[40%] w-[100%] bg-white md:bg-transparent md:mx-10 order-1 "> 
            <img src={about_us_image} alt="about_us" className='max-w-[450px] w-[90%] my-10 rounded-xl'/>
</div>
    </div>
  )
}

export default AboutUs