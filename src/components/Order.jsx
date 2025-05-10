import React, {useState} from 'react'
import { ImCross } from 'react-icons/im'
import ModalBg from './ModalBg'
import { Foods } from '../Data'
import { MdAdd } from 'react-icons/md'
import { RiSubtractFill } from 'react-icons/ri'

function Order({setPlaceOrder,placeOder}) {
    const [orderPlaed, setOrderPlaced] = useState(false)
    const [customerName, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState()
    const [item, setItem] = useState('')
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState(1)
    const [pickup, setPickup] = useState(false)
    const [address, setAddress] = useState('')

    
    function SubmitOrder(e){
      e.preventDefault()
      setOrderPlaced(true)
      
  }

  return (
    <div className="bg-white z-[100] h-auto min-h-[100vh] w-screen fixed left-0 top-0 flex justify-center items-center overflow-y-scroll">

<>
{
  orderPlaed ? <div className='md:w-[400px] w-[90%] rounded-lg h-[300px] bg-white flex flex-col text-black justify-center items-center'>
            
  <h2 className='my-4'>Reservation Successfully Booked</h2>
  <button className='p-3 px-6 border-2 border-black my-4 rounded-lg' onClick={()=>{
      setOrderPlaced(false)
      setPlaceOrder(false)
  }}>
      Goto Home
  </button>

</div> :

   <div className=' w-[90%] max-w-[650px] md:h-[500px] h-[95%] bg-white rounded-lg flex flex-col justify-center items-center p-4 px-6 text-black '>
           <div className="header flex justify-between items-center w-full mb-4">
                    <h3 className='text-xl'>Place order</h3>
        
                    <button className='text-xl cursor-pointer' onClick={()=>setPlaceOrder(!placeOder)}><ImCross/></button>
                  </div>

                  <div className="flex justify-between w-full">
                  <h3 className='self-start my-3 text-base'>Customers Info</h3>
                  <div className="flex w-[50%] justify-between items-center">
                      <span className='mr-2'>Delivery</span>

                      <div className="pickup w-[60%] flex items-center justify-between">
                        <span className=''>Pickup</span>

                        <div className={` pickup_radio ${pickup ? 'bg-black' : ' bg-slate-300'} md:h-[25px] md:w-[50px] h-[30px]  rounded-full p-1  mx-2 `} onClick={()=>setPickup(!pickup)}>
                          <span className={`h-full w-[50%] bg-white rounded-full ${pickup ? ' translate-x-[90%]' : ' translate-x-[0]'}`}></span>
                        </div>
                      </div>
                    </div>   
                  </div>


                  <form action="" className='flex  w-full md:flex-row flex-col'  onSubmit={SubmitOrder}>
                  <div className="info_a flex flex-col md:w-1/2 w-full justify-center ">


                <label htmlFor="name" className='w-full mb-1 text-[.96rem] flex flex-col'>
                    <span className='mb-2 text-sm'>Name</span>
                <input type="text" name="name" id="name" placeholder='' className='w-full p-2 border-[1px] border-slate-500 rounded-md ' value={customerName} onChange={(e)=>setName(e.target.value)} required/>
                </label>

                <label htmlFor="" className='w-full mb-1 text-[.96rem] flex flex-col'>
                    <span className='my-2 text-sm'>Phone Number</span>
                <input type="text" name="phone" id="phone" placeholder='+234'  value={phoneNumber} onChange={(e)=>setPhoneNumber(+e.target.value)} className='w-full p-2 border-[1px] border-slate-500 rounded-md ' required/>
                </label>


                <label htmlFor="sitting area" className='w-full my-2 text-[.96rem] flex flex-col mb-4'>
                    <span className='mb-2 text-sm'>Select Item </span>
                <select name="sitting" id="sitting" className='w-full p-2  rounded-lg border-[1px] border-slate-500'  onChange={(e)=> setItem(e.target.value)} required>
                   {
                    Foods.map((item, i)=> <option key={i} value={item.food}>{item.food}</option>)
                   }
                </select>
                </label>

                <div className="price_quantity flex md:w-full w-[100%] mb-3">
                    <label htmlFor="date" className='md:w-[50%] w-[55%] text-[.96rem] flex flex-col'>
                        <span className='mb-2 text-sm'>Price</span>
                      <input type="number" name="number" id="number" placeholder='0.00' className='w-full p-[9px] rounded-lg border-[1px]  border-slate-500' value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                    </label>

                    <label htmlFor="quantity" className='md:w-[50%] w-[50%] text-[.96rem] mx-2 flex flex-col'>
                        <span className='mb-2 text-sm'>Quantity</span>
                    <div className="inc_dec flex justify-between w-full p-[9px] rounded-lg border-[1px]  border-slate-500">

                      <span className='text-xl cursor-pointer' onClick={()=>{
                        if(quantity < 1){
                          setQuantity(1)
                        }else{
                          setQuantity(quantity - 1)
                        }
                      }}><RiSubtractFill/></span>
                      <input type="number" className='w-[70%] text-center text-xl' value={quantity}/>
                      <span className='text-xl cursor-pointer'
                       onClick={()=>{
                        if(quantity > 10){
                          setQuantity(10)
                        }else{
                          setQuantity(quantity + 1)
                        }
                      }}
                      ><MdAdd/></span>
                    </div>
                    </label>
                </div>
                <textarea name="" id="" placeholder='Any special Requests?' className=' p-1 rounded-lg border-[1px] border-slate-800 mt-2'>
                </textarea>
                  </div>
                   

                  <div className="info_a flex flex-col md:w-1/2 justify-start md:mx-3 mt-5 md:mt-auto h-full">
                   


                    <label htmlFor="name" className='w-full mb-1 text-[.96rem] flex flex-col'>
                    <span className='mb-2 text-sm'>Address</span>
                <input type="text" name="name" id="name" placeholder='' value={address}  className='w-full p-2 border-[1px] border-slate-500 rounded-md ' min={1} max={8} onChange={(e)=>setAddress(e.target.value)} required/>
                </label> 

                <label htmlFor="sitting area" className='w-full my-2 text-[.96rem] flex flex-col mb-4'>
                    <span className='mb-2 text-sm'>Payment method</span>
                <select name="sitting" id="sitting" className='w-full p-2  rounded-lg border-[1px] border-slate-500'  onChange={(e)=>setPaymentMethod(e.target.value)} required>
                    <option value="inside">Bank Transfer</option>
                    <option value="outside">Credit Card</option>
                    <option value="outside">Membership Premium Card</option>
                </select>
                </label> 

                <button className='p-2 px-4 rounded-lg hover:bg-black/50 hover:text-white border-2 border-black transition-all mt-4'>
                    Confirm Order
                </button> 

                  </div>


                </form>



    </div>

}
</> 
</div>

  )
}

export default Order