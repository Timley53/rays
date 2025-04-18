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

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
