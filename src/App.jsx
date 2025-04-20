import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Metric from './components/metric'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu/Menu'
import Testimonials from './components/Testimonials'
import Spaces from './components/Spaces'
import Visit_us from './components/Visit_us'
import Footer from './components/Footer'

import {ResOrderContext} from './components/Context'

function App() {
  const [reservation, setRes] = useState([])
  const [order, setOrder] = useState([])
  
  
  return (
    <ResOrderContext.Provider value={{reservation, setRes, order, setOrder}}>
    <>

      <div className=''>
        <Header/>
        <Hero/>
        <Metric/>
        <AboutUs/>
        <Menu/>
        <Testimonials/>
        <Spaces/>
        <Visit_us/>
        <Footer/>
      </div>
    </>
    </ResOrderContext.Provider>
  )
}

export default App
