import React, { useEffect } from 'react'
import {useState} from "react"
import NavItem from './NavItem'
import Button from './Button'
import { motion } from 'framer-motion'

const buttonVariants = {
  initial: { x: 0 },
  animate: { y: '-10%' },
};

function Navbar({links}) {

  const [, setIsVisited] = useState(0);
  const [isScrolled,setIsScrolled] = useState(true);
  const [prevScrollPos,setPrevScrollPos] = useState(0);
  const [showShadow, setShowShadow] = useState(false)

  useEffect(() => {
    const handleScrolled = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setShowShadow(currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleScrolled)
    return ()=>{
      window.removeEventListener("scroll", handleScrolled)
    }
  },[prevScrollPos])

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
    <nav className={`p-5 justify-between top-0 left-0 transform transition-transform ${isScrolled ? `translate-y-0`:`-translate-y-full`} ${showShadow ? `shadow-md`:`shadow-none`} flex flex-row items-center transition-all duration-300 fixed w-full z-20 bg-light-grayish-orange ease-in-out`}>
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