import * as React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import './style/AboutUs.css'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import theme from './theme'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Register from './register/Register'
import Business from './register/Business'
import Individual from './register/Individual'
import ContactUs from './routes/ContactUs'
import Gallery from './routes/Gallery'
import AboutUs from './routes/AboutUs'
import ExternalLayout from './layouts/ExternalLayout'
import Login from './routes/Login'
import Blog from './routes/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ExternalLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/AboutUs',
        element: <AboutUs />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />,
      },
      {
        path: '/Gallery',
        element: <Gallery />,
      },
      {
        path: '/blog',
        element: <Blog />,
      }
    ],
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Business',
    element: <Business />,
  },
  {
    path: '/Individual',
    element: <Individual />,
  },
])

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH='100vh'>
      <RouterProvider router={router} />
    </Box>
  </ChakraProvider>
)
