import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ExternalLayout() {
   
    return (
        <Box minH="100vh">
            <Header/>
                <Box mt="120px">
                    <Outlet/>
                </Box>
            <Footer/>
        </Box>
    )
}

export default ExternalLayout
