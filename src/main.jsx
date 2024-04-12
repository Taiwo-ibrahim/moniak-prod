import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Services from './Pages/Services/Services.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Construction from './Pages/Construction/Construction.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <Services />
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [
      {
        path: "/projects/construction",
        element: <Construction />
      },
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
