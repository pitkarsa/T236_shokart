import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' - global style, for entire application
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Home from './Home.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import ErrorPage from './ErrorPage.jsx'

const routerArray = createBrowserRouter([
    {
      path: "", // default path 'localhost:5173'
      element: <App />,
      children : [
        { path: "", element : <Home />},
        { path:'login', element : <Login /> },
        { path:'register', element: <Register />},
        { path:'aboutus', element : <AboutUs /> },
        { path:'contactus', element: <ContactUs /> }
      ]
      // errorElement : <ErrorPage />
    }    
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,

  <RouterProvider router={routerArray}>
    <App />
  </RouterProvider >
)
