import React from 'react'
import './NavItem.css'
import { NavLink } from 'react-router-dom'
import classNames from "classnames"
import {twMerge} from "tailwind-merge"
function NavItem({to,children,...props}) {
  const classes = twMerge(classNames(props.className,"text-very-dark-gray font-ubuntu text-center h-full  text-lg", {}))
  return (
    <>
    <NavLink  {...props}  to={to} className={classes}>{children}</NavLink>
    </>
  )
}

export default NavItem