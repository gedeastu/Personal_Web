// Import Create Browser Router
import {
  createBrowserRouter, 
  Routes, 
  Route,
  createRoutesFromElements,
  RouterProvider,
  useLocation
} 
from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import RootLayout from './layouts/RootLayout'
import Servicespage from './pages/Servicespage'
import Portfoliospage from './pages/Portfoliospage'
import Testimonialspage from './pages/Testimonialspage'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Homepage/>} />
        <Route path='/services' element={<Servicespage/>}/>
        <Route path='/portfolios' element={<Portfoliospage/>}/>
        <Route path='/testimonials' element={<Testimonialspage/>}/>
      </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
