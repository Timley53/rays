import React from 'react'
import { spaceImages } from '../Data'
function Spaces() {
  return (
    <div className='w-screen bg-white h-full text-black flex flex-col py-10 p-4'>
        <div className="head flex justify-center items-center">
            <div className="left_gradient mx-4 w-[200px] h-[10px] rounded-2xl hidden md:flex"/>
            <h1 className='md:flex hidden text-center'>Images from Our Spaces</h1>
            <p className='md:hidden flex text-2xl text-left w-full '>Images from Our Spaces</p>
            <div className="right_gradient mx-4 w-[200px] h-[10px] rounded-2xl hidden md:flex"/>
        </div>
        <p className='md:text-center text-[.90rem] md:w-[60%] w-[90%] md:mx-auto my-4 p-2'>
        Experience the Warmth of Our Space, From cozy candlelit dinners
to lively gatherings, our restaurant is designed for unforgettable
moments. Step inside and feel the ambiance.
        </p>

        <div className="images_of_space md:w-[80%] w-[95%] flex mx-auto justify-between  my-10 flex-col md:flex-row items-center md:items-start">
             <div className="first_col flex flex-col md:w-[35%] w-full md:max-w-[400px] h-[400px]">
                <img src={spaceImages.col_1_1.url} alt="" className='w-full object-cover h-full max-h-[150px] rounded-2xl'/>

                <div className="row flex w-full h-[250px] justify-between my-3" >
                    <img src={spaceImages.col_1_2.url} alt="" className='w-[48%] rounded-xl object-cover '/>
                    <img src={spaceImages.col_1_3.url} alt="" className='w-[48%] rounded-xl object-cover '/>
                </div>

                
                </div>   


             <div className="second_col first_col flex flex-col md:w-[37%] w-full md:max-w-[400px] h-[400px] my-2 md:my-auto  mx-6">
                <img src={spaceImages.col_2.url} alt="restaurant's image"  className='w-full rounded-2xl h-full object-cover'/>
                </div>   


             <div className="third_col flex flex-col md:w-[30%] w-full md:max-w-[400px] h-[400px]">
                <img src={spaceImages.col_3_1.url} alt="" className='w-full object-cover max-h-[200px] rounded-2xl  my-2'/>
                <img src={spaceImages.col_3_2.url} alt="" className='w-full object-cover max-h-[200px]  rounded-2xl '/>
                </div>   
        </div>
    
    </div>
  )
}

export default Spaces