import React,{useEffect, useRef} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import classNames from "classnames"
import {twMerge} from "tailwind-merge"

function ScrollAnimation({initialAnimation,animateAnimation,children,spacing,...props}) {
  const classes = twMerge(classNames(props.className,`${spacing}`, {}))
  const scrollRef = useRef(null)
  const controls = useAnimation()
  const inView = useInView(scrollRef,{
    once: true
  })
  useEffect(() => {
    if (inView) {
        controls.start(animateAnimation)
    }
  },[controls,inView,animateAnimation])
  return (
    <>
    <motion.div {...props} className={classes} ref={scrollRef} initial={{initialAnimation}} animate={{animateAnimation}}>
        {children}
    </motion.div>
    </>
  )
}

export default ScrollAnimation