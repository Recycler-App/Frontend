import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Blog() {
    return (
        <Box minHeight="calc(100vh - 120px)" p={{base:5, md:10}}>
            <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="500" color="primary" mb={5}>OUR BLOG</Text>
            <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="400" color="#FB1B1B">Welcome to Recycler! Our posts will appear here when available</Text>
        </Box>
    )
}

export default Blog
