import React from 'react'
import trufflesImg from '../../assets/truffles.jpeg'

function MenuItem({item}) {
  return (
    <div key={item} className='flex w-[30%] min-w-[250px] max-w-[250px] flex-col justify-start items-start py-2 mx-4'>
        <img src={item.img} alt="meal image" 
         className='h-[40%] max-h-[200px] w-full object-cover rounded-xl'/>
        <h2 className='font-semibold my-2'>{item.food}</h2>

        <div className="details_price flex justify-between items-center w-[95%] my-4">
            <span className='text-[.8rem] w-[70%]'>
                {
                    item.description
                }
            </span>
            <span className='font-semibold text-xl'>- ${item.price}</span>
        </div>
        <button className='p-2 px-4 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all'>
            Place order
        </button>
    </div>
  )
}

export default MenuItem