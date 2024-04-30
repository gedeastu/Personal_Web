import React from 'react'
import Skill from './Skill'
function SkillList({skills}) {
  const skillItem = skills.map((value)=>{
    return(
      <Skill key={value.id}>
        {value.label}
      </Skill>
    )
  })
  return (
    <>
    <div className='flex flex-row gap-10 my-3 items-center'>
    {skillItem}
    </div>
    </>
  )
}

export default SkillList