import { motion } from "framer-motion";
import React from 'react'
import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return()=>(
    <>
     <OgComponent/>
     <motion.div className="slide-in" initial={{ scaleX:0 }} animate={{ scaleX:0 }} exit={{ scaleX:1 }} transition={{duration:1, ease:[0.22,1,0.36,1]}}/>
     <motion.div className="slide-in" initial={{ scaleX:1 }} animate={{ scaleX:0 }} exit={{ scaleX:0 }} transition={{duration:1, ease:[0.22,1,0.36,1]}}/>
    </>
  )
}

export default Transition