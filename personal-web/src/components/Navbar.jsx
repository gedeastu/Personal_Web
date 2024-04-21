import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import Button from './Button'
function Navbar() {
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
  const link = links.map(link => {
    return <NavItem key={link.id} to={link.url}>
        {link.label}
    </NavItem>
   })
  return (
    <nav className='p-5 justify-between flex flex-row items-center'>
      <h1>ASTU NUGRAHA</h1>
      <div className='w-3/12 mx-auto flex flex-row items-center justify-between'>
        {link}
      </div>
      <Button spacing={`px-12 py-2`} primary rounded className={`font-medium text-lg`}>
        Let's Talk.
      </Button>
    </nav>
  )
}

export default Navbar