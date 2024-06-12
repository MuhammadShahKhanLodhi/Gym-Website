import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  )
}