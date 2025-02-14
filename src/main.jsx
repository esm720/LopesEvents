import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import Dashboard from './Routes/Dashboard.jsx'
import SignIn from './firebase/AuthService.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/Dashboard',
    element: <Dashboard />
  },
  {
    path:'SignIn',
    element: <SignIn />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
