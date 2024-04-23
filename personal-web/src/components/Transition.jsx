import { animate, motion } from 'framer-motion'
import React from 'react'

const variants = {
    initial:{
        opacity:0,
        x: 100
    },
    animate:{
        opacity:1,
        x: 0
    },
    exit:{
        opacity:0,
        x: -100,
    }
}
function Transition({children}) {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        {children}
    </motion.div>
  )
}

export default Transition