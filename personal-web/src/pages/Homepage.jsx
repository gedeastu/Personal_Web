import React,{useEffect, useRef, useState} from 'react'
import "./Homepage.css"
import Transition from '../components/Transition'
import useProfileContext from '../hooks/use-profile-context'
import { MdOutlineWeb,MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useAnimation, useInView } from 'framer-motion'
import { ImMobile } from "react-icons/im";
import Heading from '../components/Heading'
import Button from '../components/Button'
import SkillList from '../components/SkillList'

function Homepage({ skill, interval = 3000 }) {
  const {userData} = useProfileContext()

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

  const services = [
    {
      id:1,
      label:"Website Developer",
      icon:<MdOutlineWeb className='text-5xl' />,
      desc:"Development of the graphical user interface of a website through the use of HTML, CSS, JavaScript, Tailwind CSS, & React JS so that users can view and interact with the website."
    },
    {
      id:2,
      label:"Mobile Developer",
      icon:<ImMobile className='text-5xl' />,
      desc:"Development of the graphical user interface of a mobile through the use of Flutter & Jetpack Compose Kotlin so that users can view and interact with the mobile."
    },
  ]
  const renderServices = services.map((value)=>{
    return(
      <div key={value.id} className='flex flex-col items-center justify-center gap-3 bg-lightgray px-10 h-96 w-[20vw] rounded-xl'>
      {value.icon}
      <Heading mediumHeading fontSemiBold>
          {value.label}
      </Heading>
      <p className={`font-raleway text-center`}>
        {value.desc}
      </p>
      </div>
    )
  })

  const animation = useAnimation()
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef,{
    amount:"all",
    once:true,
  })
  return (
    <Transition className="flex flex-col">

      <div className='flex flex-row items-center max-h-screen min-h-[47.5rem] justify-center my-10'>
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

      <section className='bg-very-dark-gray w-full h-[5.5rem] flex flex-row overflow-hidden logos'>
        <div className='logos-slide flex flex-row items-center h-full transition-all'>
          {renderSkillItem}
        </div>
        <div className='logos-slide flex flex-row items-center h-full transition-all'>
          {renderSkillItem}
        </div>
      </section>

      <div ref={scrollRef} className='h-screen relative w-full flex flex-col items-center py-32'>
        <section className='flex flex-col items-center gap-2.5'>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? "0%":"-100%"
            }}
          >
            <Heading fontBold borderBottom borderYellowBottom semiLargeHeading>Services.</Heading>
          </motion.div>

          <motion.div
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? "0%":"-100%"
            }}
          >
            <Heading semiMediumHeading fontSemiBold>Here the services we are providing to you</Heading>
          </motion.div>
        </section>
        <section className='grid grid-cols-2 gap-5 mt-14'>
          <motion.div
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? "0%":"-100%"
            }}
          >
          {renderServices[0]}
          </motion.div>
          <motion.div
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? "0%":"-100%"
            }}
          >
          {renderServices[1]}
          </motion.div>
        </section>

        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
          }}
        >
          <Button primary className={`text-lg font-medium font-raleway rounded-xl mt-10 flex flex-row items-center gap-3`} spacing={`px-10 py-5`} >
            Let see the Portofolios
            <MdKeyboardDoubleArrowDown className='text-2xl animate-bounce duration-300'/>
          </Button>
        </motion.div>
      </div>   

    </Transition>
  )
}

export default Homepage