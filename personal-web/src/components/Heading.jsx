import React from 'react'
import className from 'classnames'
import { twMerge } from 'tailwind-merge'

function Heading({children,smallHeading,mediumHeading,semiMediumHeading ,leading,tracking,largeHeading,fontSemiBold,white,...props}) {
  const classes = twMerge(className(props.className,`font-raleway`,{
   'text-sm': smallHeading,
   'text-6xl': largeHeading,
   'text-2xl': mediumHeading,
   'text-xl': semiMediumHeading,
   'font-semibold': fontSemiBold,
   'leading-snug':leading,
   'tracking-wider':tracking,
   'text-white': white
  }))
  return (
    <h1 className={classes} {...props}>
        {children}
    </h1>
  )
}

Heading.propTypes = {
  checkVariationValue:({smallHeading,mediumHeading,largeHeading})=>{
    const count = Number(!!smallHeading) + Number(!!mediumHeading) + Number(!!largeHeading)
    if (count > 1) {
      return new Error('Only One Text Theme')
    }
  }
}

export default Heading