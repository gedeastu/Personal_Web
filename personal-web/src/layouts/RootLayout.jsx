import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
  return (
    <>
    <div className='root-layout bg-light-grayish-orange w-screen h-screen'>
        <Navbar/>
        <Outlet/>
    </div>
    </>
  )
}

export default RootLayout