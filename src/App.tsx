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
import DashboardLayout from './layouts/DashbboardLayout'
import Login from './routes/Login'
import Blog from './routes/Blog'
import Dashboard from './routes/Dashboard'
import Profile from './routes/Profile'
import "./style/Slider.css";
import DashboardInnerLayout from './layouts/DashboardInnerLayout'
import Bin from './routes/Bin'
import Earn from './routes/Earn'
import MyOrder from './routes/MyOrder'
import BusinessProfile from './routes/BusinessProfile'
import ViewRequest from './routes/ViewRequest'
import RecycleRequests from './routes/RecycleRequests'
import ViewRequestBusiness from './routes/ViewRequestBusiness'
import EditRequest from './routes/EditRequest'

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
  {
    path:"/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <DashboardInnerLayout />,
        children: [
          {
            path: '/dashboard/profile',
            element: <Profile />,
          },
          {
            path: '/dashboard/bin',
            element: <Bin />,
          },
          {
            path: '/dashboard/earn',
            element: <Earn />,
          },
          {
            path: '/dashboard/orders',
            element: <MyOrder />,
          },
          {
            path: '/dashboard/orders/:id',
            element: <ViewRequest />,
          },
          {
            path: '/dashboard/orders/edit/:id',
            element: <EditRequest />,
          },
          {
            path: '/dashboard/business/profile',
            element: <BusinessProfile />,
          },
          {
            path: '/dashboard/business/recycle-requests',
            element: <RecycleRequests />,
          },
          {
            path: '/dashboard/business/recycle-requests/:id',
            element: <ViewRequestBusiness />,
          },
        ]
      }
    ]

  }
])

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH='100vh'>
      <RouterProvider router={router} />
    </Box>
  </ChakraProvider>
)
