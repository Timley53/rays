import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { Foods } from '../../Data'



function Menu() {
    const [fullMenu, setFullMenu] = useState(false)
  return (
    <section className='bg-white py-20 w-screen h-full text-black p-4
     overflow-x-hidden' id='Menu'>
           <div className="head flex justify-between p-2 md:w-[85%] mx-auto items-center mb-5 ">
            <h2 className='text-2xl font-bold'>Our Menu</h2>

            <button className='border-2 text-black border-black p-2 px-3 rounded-lg hover:bg-black hover:text-white transition-all'
            onClick={() => setFullMenu(!fullMenu)}
            >
                Explore Full Menu
            </button>
            </div> 
            <div className={`all_menu w-[90%] mx-auto flex md:justify-start justify-center items-center ${fullMenu ? 'flex-wrap' :"flex-nowrap overflow-x-scroll "} `}>
                {
                    Foods.map((item, index) => (
                        <MenuItem key={index } item={item}/>
                    ))
                }
                {/* <MenuItem/> */}
            </div>
    </section>
  )
}

export default Menu