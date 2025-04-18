import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <>
    <div className='md:flex hidden w-screen flex-col justify-center items-center bg-black text-white py-10 p-4'>
        <div className="flex  justify-between items-start w-[90%] mx-auto mt-10 mb-5">
        <div className="rays w-[30%]">
            <h1>Rays</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore </p>
        </div>
        <div className="company w-[15%] md:flex flex-col hidden">
            <h1>Company</h1>
            <a href="" className='my-1 hover:underline'>Home</a>
            <a href="" className='my-1 hover:underline'>Menu</a>
            <a href="" className='my-1 hover:underline'>About</a>
            <a href="" className='my-1 hover:underline'>Reservation</a>
            <a href="" className='my-1 hover:underline'>Contact</a>
        </div>

        <div className="support w-[15%] md:flex flex-col hidden">
            <h1>Support</h1>
            <a href="" className='my-2 hover:underline'>Contact Us</a>
            <a href="" className='my-2 hover:underline'>Help</a>
        </div>

        <div className="socials w-[15%] ">
            <h1>Social</h1>
            <div className="socials_icon flex w-full justify-between items-center my-2 text-xl">
                <span><FaXTwitter/></span>
                <span><FaFacebook/></span>
                <span><AiFillInstagram/></span>
                <span><AiFillTikTok/></span>
            </div>
        </div>

        </div>
        <div className="copyright w-[90%] mx-auto flex justify-between items-center border-t-2 border-white pt-5 text-sm">
            <p>Copyright © 2023. All rights reserved.</p>
            <p>Privacy Policy.Terms & Conditions</p>
            </div>
    </div>


    <div className="md:hidden  flex w-full p-3 flex-col">
            <div className="rays w-[90%] border-b-2  pb-1">
                <p className='text-2xl my-3'>Rays</p>
                <p>Great food, even better experiences</p>
            </div>

            <div className="navs mt-7 flex w-[80%] justify-between">
            <a href="" className='my-1 hover:underline'>Home</a>
            <a href="" className='my-1 hover:underline'>Menu</a>
            <a href="" className='my-1 hover:underline'>About</a>
            <a href="" className='my-1 hover:underline'>Reservation</a>
            <a href="" className='my-1 hover:underline'>Contact</a>
            </div>

            <div className="socials_icon flex w-[30%] justify-between items-center my-4 text-3xl">
                <span><AiFillInstagram/></span>
                <span><AiFillTikTok/></span> 
                <span><FaXTwitter/></span>
                <span><FaFacebook/></span>
                </div>


                <div className="rights_reserved w-full text-center my-3
                ">
                <p className='text-sm'> © <span className='text-yellow-600'>2025 </span>Rays. All rights reserved.</p>
                <p>Privacy Policy | Terms</p>
                </div>
    </div>
    </>


  )
}

export default Footer