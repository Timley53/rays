import React, { useState } from 'react'
import Header from './header'
import Reservation from './Reservation'
import Order from './Order'

function Hero() {
  const [showRes, setShowRes] = useState(false)
  const [placeOder, setPlaceOrder] = useState(false)
  return (
    <>
    {
      showRes && <Reservation showRes={showRes} setShowRes={setShowRes}/>
    }
    {
      placeOder && <Order placeOder={placeOder} setPlaceOrder={setPlaceOrder} />
    }
    <div className="hero h-screen w-screen flex flex-col justify-center items-center  " id='Home'>


      <div className="hero_text text-white  mb-4 z-10 w-full text-center pt-10 ">
          <p className='w-[95%] md:w-[98%] mx-auto md:my-5 md:text-6xl text-4xl'>Savor Every Bite. Experience Authentic Flavours. </p>
          <p className='md:w-[50%] w-[60%] max-w-[450px] md:text-xl mx-auto text-center text-base mt-5 md:mt-1'>Indulge in handcrafted dishes made with fresh, locally sourced ingredients. Dine in or order online.</p>


          <div className="md:mt-8 mt-8 flex mx-auto md:w-[30%] w-[80%] items-center justify-around p-2 md:ax-w-[300px] max-w-[300px] text-sm">

            <button type='button'  className='p-2 py-4 px-4 border-2 rounded-lg bg-black border-black hover:opacity-60 transition-all text-white cursor-pointer' onClick={()=> setShowRes(!showRes)}>Reserve a Table</button>

            <button className='p-2 py-3 px-4 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all bg-white text-black md:bg-transparent md:text-white' onClick={()=>setPlaceOrder(true)}>Place Order</button>
          </div> 

          
      </div>
      
    </div>
    </>
  )
}

export default Hero;