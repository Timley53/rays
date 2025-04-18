import React from 'react'
import { FaStar } from "react-icons/fa";
import customer from '../assets/customer_1.jpeg'
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
  return (
    <div className='w-screen bg-white h-full text-black flex flex-col py-10 p-4'>
        <div className="header flex items-center justify-center">
            <div className="left_gradient hidden md:flex mx-4 w-[200px] h-[10px] rounded-2xl"/>

            <h1 className='w-full md:w-auto text-left md:text-center'>Testimonials</h1>
            <div className="right_gradient hidden md:flex mx-4 w-[200px] h-[10px] rounded-2xl"/>
        </div>


        <div className="testimonial_cards flex flex-nowrap overflow-x-auto items-center justify-start md:w-[90%] w-full mx-auto h-full md:p-4 ">
            <TestimonialCard item={{name: 'John Doe', image: 'https://via.placeholder.com/150', testimonial: 'This is the best restaurant I have ever been to!'}}/>
            <TestimonialCard item={{name: 'Jane Smith', image: 'https://via.placeholder.com/150', testimonial: 'The food was amazing and the service was excellent!'}}/>
            <TestimonialCard item={{name: 'Sam Wilson', image: 'https://via.placeholder.com/150', testimonial: 'I loved every bite of my meal!'}}/>
            <TestimonialCard item={{name: 'Sam Wilson', image: 'https://via.placeholder.com/150', testimonial: 'I loved every bite of my meal!'}}/>
            <TestimonialCard item={{name: 'Sam Wilson', image: 'https://via.placeholder.com/150', testimonial: 'I loved every bite of my meal!'}}/>
        </div>
    </div>
  )
}

export default Testimonials



function TestimonialCard({item}) {
    return (
            <div className="card flex flex-col w-[400px] min-w-[400px] max-h-[400px] h-full rounded-xl shadow-lg p-4 m-4 bg-slate-100">
                <span className='text-5xl'><RiDoubleQuotesL/></span>

                <p className='text-xs my-3 w-[90%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, cumque illo. Voluptat</p>

                <div className="user_review flex items-center mt-4 justify-between w-full"> 
                    <div className="user_details flex py-4 items-center justify-start w-[80%]">
                        <img src={customer} alt="user image" className='w-[50px] h-[50px] rounded-full object-cover mx-2'/>
                        <span className='font-semibold flex-col flex'>
                            <span>{"Lizzy Hart"}</span>
                            <span className='text-[.8rem]'>Customer</span>
                        </span>

                    </div>

                    <div className="stars flex items-center justify-start mt-4"> 

                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-slate-300 mx-1.5 text-lg'/>
                    </div>
                </div>

            </div>
    )
}