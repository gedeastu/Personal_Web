import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import RootLayout from './layouts/RootLayout'
import Servicespage from './pages/Servicespage'
import Portfoliospage from './pages/Portfoliospage'
import Testimonialspage from './pages/Testimonialspage'
import { AnimatePresence } from 'framer-motion'
import useProfileContext from './hooks/use-profile-context';

import { RiTailwindCssFill } from "react-icons/ri";
import { ImHtmlFive,ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFlutter,SiJetpackcompose } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

import { useEffect } from 'react';

function App() {
  const {userData,fetchProfile} = useProfileContext()
  useEffect(()=>{
    fetchProfile()
  },[fetchProfile])
  if (!userData) {
    return <div className='w-full h-screen flex justify-center items-center'>Loading..</div>
  }
  const skills = [
    {
        id:1,
        label:"HTML",
        icon:<ImHtmlFive/>
    },
    {
        id:2,
        label:"CSS",
        icon:<ImCss3/>
    },
    {
        id: 3,
        label:"Tailwind",
        icon:<RiTailwindCssFill />
    },
    {
        id:4,
        label: "JavaScript",
        icon:<IoLogoJavascript />
    },
    {
        id:5,
        label:"React JS",
        icon: <FaReact/>
    },
    {
        id:6,
        label:"Flutter",
        icon:<SiFlutter/>
    },
    {
        id:7,
        label:"Jetpack Compose Kotlin",
        icon:<SiJetpackcompose/>
    }
  ]
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index  path='/'  element={<Homepage skill={skills}/>} />
            <Route path='/services' element={<Servicespage/>}/>
            <Route path='/portfolios' element={<Portfoliospage/>}/>
            <Route path='/testimonials' element={<Testimonialspage/>}/>
          </Route>
        </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App
