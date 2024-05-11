import React,{useEffect, useState} from 'react'
import "./Homepage.css"
import Transition from '../components/Transition'
import useProfileContext from '../hooks/use-profile-context'
import Heading from '../components/Heading'
import Button from '../components/Button'
import SkillList from '../components/SkillList'

function Homepage({ skill, interval = 3000 }) {
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
  const [currentSlide, setcurrentSlide] = useState(0)

  useEffect(()=>{
    const nextSlide = (currentSlide + 1) % skill.length
    const intervalId = setInterval(()=>{
      setcurrentSlide(nextSlide)
    },interval)

    return ()=>clearInterval(intervalId);
  },[currentSlide,skill.length, interval])

  const {userData} = useProfileContext()

  const renderSkillItem = skill.map((value)=>{
    return(
      <div key={value.id} className={`flex flex-row items-center gap-3 mx-[5rem]`}>
        <div className='text-white text-xl'>
        {value.icon}
        </div>
        <Heading white fontSemiBold semiMediumHeading>
          {value.label}
        </Heading>
     </div>
    )
  })
  return (
    <Transition className="flex flex-col">
      <div className='flex flex-row items-center h-[47rem] justify-center'>
        <section className=' w-[45%] flex flex-col justify-center'>
            <div className='w-full'>
              <Heading largeHeading leading tracking fontSemiBold>
              HEY, I'M {userData.name.split('').slice(0, 9).join('').toUpperCase()}, A <span className='border-b-4 border-yellow-500'>FRONT-END</span> & <span className='border-b-4 border-yellow-500'>MOBILE DEVELOPER</span> FROM BALI
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
      </div>
      <section className='bg-very-dark-gray w-full h-[5.5rem] flex flex-row overflow-hidden relative bottom-0 logos'>
        <div className='logos-slide flex flex-row items-center h-full transition-all'>
          {renderSkillItem}
        </div>
        <div className='logos-slide flex flex-row items-center h-full transition-all'>
          {renderSkillItem}
        </div>
      </section>
      <div className='h-screen w-full flex flex-col items-center py-32'>
        <section className='flex flex-col items-center gap-2.5'>
          <Heading fontBold borderBottom borderYellowBottom semiLargeHeading>Services.</Heading>
          <Heading semiMediumHeading fontSemiBold>Here the services we are providing to you</Heading>
        </section>
        <section>

        </section>
      </div>      
    </Transition>
  )
}

export default Homepage