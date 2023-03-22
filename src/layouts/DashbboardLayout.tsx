import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'
import DashboardHeader from '../components/DashboardHeader'
import Footer from '../components/Footer'

function DashboardLayout() {
   
    return (
        <Box minH="100vh">
            <DashboardHeader/>
                <Box mt="120px">
                    <Outlet/>
                </Box>
            <Footer/>
        </Box>
    )
}

export default DashboardLayout
