import React, {useState} from 'react'
import { ImCross } from 'react-icons/im';
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
    <header className='hidden md:flex bg-black fixed top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  justify-between items-center px-6 py-2 shadow-md w-[80%] mx-auto max-w-[700px] rounded-lg'>

        <div className="logo">
          <a href="#Home">
            Ray's
          </a>
        </div>

        <nav>
            <ul className='w-[75%] flex'>
            <NavLinks details={"Home"}/>
            <NavLinks details={"Menu"}/>
            <NavLinks details={"About"}/>
            <NavLinks details={"Reservations"}/>
            <NavLinks details={"Contact"}/>
            </ul>
        </nav>
    </header>
    {/* sm */}

    <header className='md:hidden flex bg-black fixed top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  justify-between items-center px-3 py-3 shadow-md w-[90%] mx-auto  rounded-lg'>
      
        <div className="logo">
            Ray's </div>

            <button className='' onClick={()=>setShowNav(!showNav)}>
              <TiThMenu className='text-3xl p-1'/>
            </button>


            <nav className={`md:hidden flex fixed top-[0] left-[0] w-screen h-screen bg-white z-50  flex-col p-3 translate-y-[-5%] ${showNav ? 'translate-x-[-5%]': 'translate-x-[110%]'} transition-all`}>

              <button className='self-center mx-2' onClick={()=>setShowNav(!showNav)}>
                <ImCross className='text-2xl text-black my-4 mt-10 mx-6'/>
              </button>
              
              <ul className='w-[100%] flex flex-col items-center'>
            <NavLinks details={"Home"}  showNav={showNav} setShowNav={setShowNav}/>
            <NavLinks details={"Menu"} showNav={showNav} setShowNav={setShowNav}/>
            <NavLinks details={"About"} />
            <NavLinks details={"Reservations"} showNav={showNav} setShowNav={setShowNav}/>
            <NavLinks details={"Contact"} showNav={showNav} setShowNav={setShowNav}/>
            </ul>
              </nav> 
                 </header>
    </>



  )
}

export default Header


 function NavLinks({details, showNav, setShowNav}) {
          
    return ( <li className='list-none flex'>
    <a onClick={()=>setShowNav(false)} href={`#${details}`} className="p-2 md:mx-2 navlink md:my-auto m-4 md:text-white text-black md:text-base text-[1.8rem] ">{details}</a>
    </li>)
  }