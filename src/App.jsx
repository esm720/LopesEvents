import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import PageHeader from './components/landing/PageHeader'
import BlockOne from './components/landing/BlockOne'

function App() {

  return (
    <>
      <NavBar />
      <PageHeader />
    </>
  )
}

export default App
