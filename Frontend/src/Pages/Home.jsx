import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Main from '../Components/Main'
import Sai from '../Components/Sai'
import DonatorCard from '../Components/DonatorCard'
import About from '../Components/About'
import EventsAndGallery from '../Components/EventsAndGallery'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div className='w-full'>
        <div>
            <Navbar/>
            </div>
            
        <div className='container'>
         <Hero/>
        </div>
        <div>
            <Sai/>
        </div>
        <div>
            <Main/>
        </div>
        <div>
            <EventsAndGallery/>
        </div>
        <div>
            <DonatorCard/>
        </div>
        <div>
            <About/>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Home
