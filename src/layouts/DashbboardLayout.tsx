import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import DashboardHeader from '../components/DashboardHeader'
import Footer from '../components/Footer'
import { useUser } from '../context/UserContext'

function DashboardLayout() {
    const { profile, user }:any = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(!profile && !user){
            navigate("/")
        }
       },[profile, navigate, user])
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
