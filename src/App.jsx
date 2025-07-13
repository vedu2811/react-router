import React from 'react'
import NavBar from './component/NavBar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
// import Contact from './pages/Contact'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './component/ContactInfo'
import ContactForm from './component/ContactForm'
import NotFound from './component/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs from './pages/Jobs'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />}/>
        <Route path='products' element={<Product />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='jobs' element={<JobsLayout />}>
          <Route index element={<Jobs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App