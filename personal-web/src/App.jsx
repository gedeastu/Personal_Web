import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import RootLayout from './layouts/RootLayout'
import Servicespage from './pages/Servicespage'
import Portfoliospage from './pages/Portfoliospage'
import Testimonialspage from './pages/Testimonialspage'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<Homepage/>} />
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
