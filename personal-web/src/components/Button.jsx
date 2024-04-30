import React from 'react'
import classNames from "classnames"
import {twMerge} from "tailwind-merge"
function Button({children,primary,secondary, success, warning, danger, outline, rounded,spacing,...props}) {
  const classes = twMerge(classNames(props.className,`${spacing} text-very-dark-gray font-ubuntu`, {
    'bg-soft-yellow' : primary,
    'rounded-full': rounded,
    'border-4 border-black': outline
  }))
  return (
    <button {...props} className={classes}>
        {children}
    </button>
  )
}

Button.propTypes = {
    checkVariationValue: ({primary,secondary, success, warning, danger})=>{
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        if (count > 1) {
            return new Error('Only One Button Theme can be true')
        }
    }
}

export default Button