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
import AboutUs from "./routes/AboutUs";
import ExternalLayout from "./layouts/ExternalLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExternalLayout />,
    children:[   
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/AboutUs",
      element: <AboutUs/>,
    },
      
    ]
  }
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh">
        <RouterProvider router={router} />
    </Box>
  </ChakraProvider>
);
