import React from 'react'

export default function ModalBg({children}) {
  return (
    <div className='w-screen h-screen bg-black/70 fixed top-0 left-0 z-[100]   justify-center items-center flex'>
        {
            children
        }
    </div>
  )
}
