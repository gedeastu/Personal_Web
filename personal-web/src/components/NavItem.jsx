import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from "classnames"
import {twMerge} from "tailwind-merge"
function NavItem({to,key,children,...props}) {

  const classes = twMerge(classNames(props.className,"text-very-dark-gray font-ubuntu font-normal text-lg", {}))

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
        return;
    }
    event.preventDefault()
  }

  return (
    <>
    <NavLink  {...props} to={to} key={key} className={classes} onClick={handleClick}>{children}</NavLink>
    </>
  )
}

export default NavItem