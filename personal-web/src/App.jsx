// Import Create Browser Router
import {
  createBrowserRouter, 
  Routes, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Homepage/>} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
