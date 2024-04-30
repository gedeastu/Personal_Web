import React from 'react'
import {useState} from "react"
import NavItem from './NavItem'
import Button from './Button'
import { motion } from 'framer-motion'

const buttonVariants = {
  initial: { x: 0 },
  animate: { y: '-10%' },
};

function Navbar({links}) {
  const [isVisited, setIsVisited] = useState(0)

  const handleVisited = (index) => {
    try {
      setIsVisited(index)
      localStorage.setItem('isVisited', index)
    } catch (error) {
      console.error('Failed to save visited link to localStorage:', error);
    }
  }

  const link = links.map((link) => {
    const visit = link.id === parseInt(localStorage.getItem("isVisited"))
    //console.log(isVisited)
    return(
      <motion.div key={link.id} tabIndex={link.id} animate={visit ? 'animate' : 'initial'} transition={{ duration: 0.5 }}  initial="initial" variants={buttonVariants} onClick={()=>handleVisited(link.id)}>
        <NavItem to={link.url} className={visit && `font-bold border-b-2  border-very-dark-gray transition-all`}>
            {link.label}
        </NavItem>
      </motion.div>
    )
   })

  return (
    <nav className='p-5 justify-between sticky top-0 flex flex-row items-center'>
      <h1 className='font-extrabold text-lg'>ASTU NUGRAHA</h1>
      <div className='w-3/12 relative mx-auto flex flex-row items-center justify-between'>
        {link}
      </div>
      <Button spacing={`px-14 py-3`} primary rounded className={`font-medium text-lg`}>
        Let's Talk.
      </Button>
    </nav>
  )
}

export default Navbar