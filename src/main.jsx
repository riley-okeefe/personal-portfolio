import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'
import './index.css'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />, 
    children: [
      {
        path: "/personal-portfolio/",
        element: <Home />,
      },
      {
        path: "/personal-portfolio/about",
        element: <About />,
      },
      {
        path: "/personal-portfolio/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/personal-portfolio/contact",
        element: <Contact />,
      },
    ]
  }

  // createRoutesFromElements(
  //   <Route path='/personal-portfolio/' element={<Layout />}>
  //     <Route path='/personal-portfolio/' element={<Home />} />
  //     <Route path='/personal-portfolio/about' element={<About />} />
  //     <Route path='/personal-portfolio/portfolio' element={<Portfolio />} />
  //     <Route path='/personal-portfolio/contact' element={<Contact />} />
  //   </Route>
  // )
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
