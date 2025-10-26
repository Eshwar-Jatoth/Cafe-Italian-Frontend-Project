import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Menu from './Components/Menu'
import DiningExperience from './Components/DiningExperience'
import Specials from './Components/Specials'
import MonthlyHighlights from './Components/MonthlyHighlights'
import Booking from './Components/Booking'
import GuestReviews from './Components/GuestReviews'
import GallerySection from './Components/GallerySection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header />
      <Home />
      <Menu />
      <DiningExperience />
      <Specials />
      <MonthlyHighlights />
      <Booking />
      <GuestReviews />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
