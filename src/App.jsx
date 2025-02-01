import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import PageHeader from './components/landing/PageHeader'
import Features from './components/landing/Features'
import Highlights from './components/landing/Highlights'
import Footer from './components/landing/Footer'

function App() {

  return (
    <>
      <NavBar />
      <PageHeader />
      <Features />
      <Highlights />

      <Footer />
    </>
  )
}

export default App
