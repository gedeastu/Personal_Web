import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
    const links = [
        {
            id:1,
            label:"Home",
            url:"/"
        },
        {
            id:2,
            label:"Services",
            url:"/services"
        },
        {
            id:3,
            label:"Portfolios",
            url:"/portfolios"
        },
        {
            id:4,
            label:"Testimonials",
            url:"/testimonials"
        }
    ]
  return (
    <>
    <div className='root-layout bg-light-grayish-orange w-screen h-screen'>
        <Navbar links={links}/>
        <Outlet/>
    </div>
    </>
  )
}

export default RootLayout