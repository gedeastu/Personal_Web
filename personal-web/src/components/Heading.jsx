import React from 'react'
import className from 'classnames'
import { twMerge } from 'tailwind-merge'

function Heading({children,smallHeading,mediumHeading,semiMediumHeading, largeHeading,semiLargeHeading ,leading,tracking,fontSemiBold,white,fontBold,fontBlack,borderBottom,borderYellowBottom ,...props}) {
  const classes = twMerge(className(props.className,`font-raleway`,{
   'text-sm': smallHeading,
   'text-6xl': largeHeading,
   'text-5xl': semiLargeHeading,
   'text-2xl': mediumHeading,
   'text-xl': semiMediumHeading,
   'font-semibold': fontSemiBold,
   'font-bold': fontBold,
   'font-black': fontBlack,
   'leading-snug':leading,
   'tracking-wider':tracking,
   'text-white': white,
   'border-b-4': borderBottom,
   'border-yellow-500': borderYellowBottom
  }))
  return (
    <h1 className={classes} {...props}>
        {children}
    </h1>
  )
}

Heading.propTypes = {
  checkVariationValue:({smallHeading,mediumHeading,largeHeading,semiLargeHeading,semiMediumHeading})=>{
    const count = Number(!!smallHeading) + Number(!!mediumHeading) + Number(!!largeHeading) + Number(!!semiMediumHeading) +  Number(!!semiLargeHeading)
    if (count > 1) {
      return new Error('Only One Text Theme')
    }
  }
}

export default Heading