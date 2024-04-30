import React from 'react'
import Transition from '../components/Transition'
import useProfileContext from '../hooks/use-profile-context'
import Heading from '../components/Heading'
import Button from '../components/Button'
import SkillList from '../components/SkillList'

function Homepage() {
  const skills = [
    {
        id:1,
        label:"Front-End Web Developer",
    },
    {
        id:2,
        label:"Mobile Developer",
    },
  ]
  const {userData} = useProfileContext()
  return (
    <Transition className="flex flex-row items-center h-[70%] justify-center">
      <section className=' w-[45%] h-full flex flex-col justify-center'>
          <div className='w-full'>
            <Heading largeHeading leading tracking fontSemiBold>
            HEY, I'M {userData.name.split('').slice(0, 9).join('').toUpperCase()}, A <span className='border-b-4 border-yellow-500'>FRONT-END</span> & <span className='border-b-4 border-yellow-500'>MOBILE DEVELOPER</span> FROM {userData.company.toUpperCase()}
            </Heading>
          </div> 
          <SkillList skills={skills} />
          <div className='flex flex-row mt-3 items-center justify-between w-[60%]'>
            <Button outline spacing={`px-10 py-3 rounded-full`} className={`text-xl font-medium`}>
              Want to disscuss?
           </Button>
           <Button primary rounded spacing={`px-16 py-3 rounded-full`} className={`text-xl font-medium`}>
            Let's Talk.
           </Button>
          </div>
      </section>
      <section className=' h-full flex items-center'>
        {/* {console.log(userData)} */}
        <div className='bg-yellow-400 w-[150%]  rounded-full overflow-hidden'>
        <img src={userData.avatar_url} alt={userData.name} className='grayscale'/>
        </div>
      </section>
    </Transition>
  )
}

export default Homepage