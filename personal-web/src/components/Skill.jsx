import React from 'react'
import { TbNorthStar } from "react-icons/tb";
import Heading from './Heading';
function Skill({children}) {
  return (
    <div className='flex flex-row items-center gap-2'>
    <TbNorthStar className='text-yellow-500 text-2xl'/>
    <Heading mediumHeading>
      {children}
    </Heading>
    </div>
  )
}

export default Skill