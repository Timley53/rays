import React, { useState } from 'react'
import ModalBg from './ModalBg'
import { ImCross } from 'react-icons/im'

function Reservation({
    showRes, setShowRes
}) {

        const [customername, setName] = useState('')
        const [phoneNumber, setPhoneNumber] = useState()
        const [date, setDate] = useState('')
        const [time, setTime] = useState('')
        const [sittingArea, setArea] = useState('')
        const [guests, setGuests] = useState(0)
        const [paymentMethod, setPaymentMethod] = useState('')
        const [resComplete, SetResComplete] = useState(false)




        function SubmitRes(e){
            e.preventDefault()

            SetResComplete(true)
            
        }

  return (
    <div className="bg-white z-[100] h-auto min-h-[100vh] w-screen fixed left-0 top-0 flex justify-center items-center overflow-y-scroll">


        {resComplete && <div className='md:w-[400px] w-[90%] rounded-lg h-[300px] bg-white flex flex-col text-black justify-center items-center'>
            
                <h2 className='my-4'>Reservation Successfully Booked</h2>
                <button className='p-3 px-6 border-2 border-black my-4 rounded-lg' onClick={()=> {
                    setShowRes(false)
                    SetResComplete(false) 
                }}>
                    Goto Home
                </button>

             </div> 
            
        }

        {
            !resComplete &&
            <div className="reservation w-[100%] md:w-[680px] bg-white overflow-y-scroll">
      {
        <div className='w-[100%] max-w-[650px] md:h-[490px] md:min-h-[490px] h-auto bg-white rounded-lg flex flex-col justify-center items-center p-2 md:p-4 px-6 text-black reservation'>
          <div className="header flex justify-between items-center w-full mb-4 my-2 md:my-auto">
            <h3 className='text-xl'>Make a Reservation</h3>

            <button className='text-xl cursor-pointer' onClick={()=>setShowRes(!showRes)}><ImCross/></button>
          </div>
            <h3 className='self-start my-3 text-base'>Customers Info</h3>
        <form action="" className='flex h-full w-full md:flex-row flex-col' onSubmit={SubmitRes}>
            <div className="info_a flex flex-col md:w-1/2 w-full justify-center ">

                <label htmlFor="name" className='w-full mb-1 text-[.96rem] flex flex-col'>
                    <span className='mb-2 text-sm'>Name</span>
                <input type="text" name="name" id="name" placeholder='' className='w-full p-2 border-[1px] border-slate-500 rounded-md ' value={customername} onChange={(e)=>setName(e.target.value)} required/>
                </label>

                <label htmlFor="" className='w-full mb-1 text-[.96rem] flex flex-col'>
                    <span className='my-2 text-sm'>Phone Number</span>
                <input type="text" name="phone" id="phone" placeholder='+234'  value={phoneNumber} onChange={(e)=>setPhoneNumber(+e.target.value)} className='w-full p-2 border-[1px] border-slate-500 rounded-md' required/>
                </label>

                {/* date time */}

                <div className="date_time flex md:w-full w-[80%] mt-2">
                    <label htmlFor="date" className='md:w-full w-[65%] text-[.96rem] flex flex-col'>
                        <span className='mb-2 text-sm'>Date</span>
                      <input type="date" name="date" id="date" placeholder='' className='w-full p-[9px] rounded-lg border-[1px]  border-slate-500' value={date} onChange={(e)=>setDate(e.target.value)} required/>
                    </label>

                    <label htmlFor="time" className='md:w-full w-full text-[.96rem] mx-2 flex flex-col'>
                        <span className='mb-2 text-sm'>Time</span>
                    <input type="time" name="time" id="time" placeholder='' className='w-full p-2 rounded-lg border-[1px]  border-slate-500' value={time} onChange={(e)=>setTime(e.target.value)} required/>
                    </label>
                </div>
                {/*  */}


                <label htmlFor="sitting area" className='w-full my-2 text-[.96rem] flex flex-col mb-4'>
                    <span className='mb-2 text-sm'>Sitting Area</span>
                <select name="sitting" id="sitting" className='w-full p-2  rounded-lg border-[1px] border-slate-500'  onChange={(e)=> setArea(e.target.value)} required>
                    <option>Choose an area</option>
                    <option value="inside">Inside</option>
                    <option value="outside">Outside</option>
                </select>
                </label>

                <textarea name="" id="" placeholder='Any special Requests?' className=' p-1 rounded-lg border-[1px] border-slate-800 '>
                </textarea>
            </div>


            <div className="info_a flex flex-col md:w-1/2 justify-start md:mx-2 mt-5 md:mt-auto h-full">
            <label htmlFor="name" className='w-full mb-1 text-[.96rem] flex flex-col'>
                    <span className='mb-2 text-sm'>Number of Guests</span>
                <input type="number" name="name" id="name" placeholder='' value={guests}  className='w-full p-2 border-[1px] border-slate-500 rounded-md ' min={1} max={8} onChange={(e)=>setGuests(e.target.value)} required/>
                </label> 

                <label htmlFor="sitting area" className='w-full my-2 text-[.96rem] flex flex-col mb-4'>
                    <span className='mb-2 text-sm'>Payment method</span>
                <select name="sitting" id="sitting" className='w-full p-2  rounded-lg border-[1px] border-slate-500'  onChange={(e)=>setPaymentMethod(e.target.value)} required>
                    <option value="inside">Cash In person</option>
                    <option value="outside">Credit Card</option>
                    <option value="outside">Membership Premium Card</option>
                </select>
                </label> 

                <button className='p-2 px-4  rounded-lg hover:bg-black/50 hover:text-white border-2 border-black transition-all mt-4'>
                    Book Reservation
                </button> 

            </div>
        </form>

            
        </div>
}
                
            </div>
        }
</div>

)
}


export default Reservation