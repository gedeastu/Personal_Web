import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import RootLayout from './layouts/RootLayout'
import Servicespage from './pages/Servicespage'
import Portfoliospage from './pages/Portfoliospage'
import Testimonialspage from './pages/Testimonialspage'
import { AnimatePresence } from 'framer-motion'
import useProfileContext from './hooks/use-profile-context';
import { useEffect } from 'react';

function App() {
  const {userData,fetchProfile} = useProfileContext()
  useEffect(()=>{
    fetchProfile()
    // const handleBeforeUnload = (e) => {
    //   e.preventDefault();
    //   e.returnValue = ''; // This is needed for Chrome
    // };

    // window.addEventListener('beforeunload', handleBeforeUnload);

    // return () => {
    //     window.removeEventListener('beforeunload', handleBeforeUnload);
    // };
  },[fetchProfile])
  if (!userData) {
    return <div className='w-full h-screen flex justify-center items-center'>Loading..</div>
  }
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index  path='/'  element={<Homepage/>} />
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
