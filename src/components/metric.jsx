import React from 'react'

function Metric() {
  return (
    <div className='overflow-hidden h-[150px] bg-[#f8f8f8] flex justify-center items-center w-screen'>
        <div  className='bg-[#f8f8f8] w-[100%] overflow-hidden sm:hidden'>

        <div className="metric flex justify-around items-center w-full p-4 bg-[#f8f8f8] text-black">
            <div className="metric_item flex flex-col justify-center items-center text-center p-4 mx-5">
            <p className='text-2xl font-bold'>100+</p>
            <p className='text-lg'>Dishes</p>
            </div>
            <div className="metric_item flex flex-col justify-center items-center text-center p-4 mx-5">
            <p className='text-2xl font-bold'>50+</p>
            <p className='text-lg'>Drinks</p>
            </div>
            <div className="metric_item flex flex-col justify-center items-center text-center p-4 mx-5">
            <p className='text-2xl font-bold'>200+</p>
            <p className='text-lg'>Customers</p>
            </div>
        </div>
        </div>

        <div className="metric sm:flex justify-around items-center w-full p-4 bg-[#f8f8f8] text-black hidden">
            <div className="metric_item flex flex-col justify-center items-center text-center p-4">
            <p className='text-[1.4rem] my-2 font-bold'>200+</p>
            <p className='text-[.99rem]'>Meals Served</p>
            </div>
            <div className="metric_item flex flex-col justify-center items-center text-center p-4">
            <p className='text-[1.4rem] my-2 font-bold'>600+</p>
            <p className='text-[.99rem]'>Ordera Delivered</p>
            </div>
            <div className="metric_item flex flex-col justify-center items-center text-center p-4">
            <p className='text-[1.4rem] my-2 font-bold'>700+</p>
            <p className='text-[.99rem]'>Satisfied Customers</p>
            </div>
            <div className="metric_item flex flex-col justify-center items-center text-center p-4">
            <p className='text-[1.4rem] my-2 font-bold'>3,600+</p>
            <p className='text-[.99rem]'>Hours of expertise</p>
            </div>
        </div>

    </div>
  )
}

export default Metric