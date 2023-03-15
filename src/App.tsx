import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import './style/AboutUs.css'
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";
import theme from "./theme";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./components/AboutUs";
import Register from "./register/Register";
import Business from "./register/Business";
import Individual from "./register/Individual";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Business",
    element: <Business />,
  },
  {
    path: "/Individual",
    element: <Individual />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh">
      <RouterProvider router={router} />
    </Box>
  </ChakraProvider>
);
