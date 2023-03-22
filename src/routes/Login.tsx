import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import Logo from '../svg/Logo'
import Img from '../assets/bro.svg'
import Img2 from '../assets/Group 50.png'
import Input from '../components/Input'
import { useNavigate } from 'react-router'
import Help from '../svg/Help'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(AuthenticationContext)

  const Login = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        window.alert('successfully Logged in')
        window.location.replace('http://localhost:3000/dashboard')
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message
        window.alert(errorMessage)
      })
  }
  return (
    <Flex w='100vw' h='100vh'>
      <Box w='40%' bg='primary' h='100%' p={10}>
        <Flex onClick={() => navigate('/')} cursor='pointer'>
          <Logo color='#fff' />
          <Text fontWeight={500} fontSize='25px'>
            {' '}
            Recycler
          </Text>
        </Flex>
        <Box textAlign='center' w='70%' mx='auto' mt='calc(50vh - 350px)'>
          <Image src={Img} mb={5} mx='auto' />
          <Text color='light' fontSize='28px' fontWeight={500} mb={5}>
            Hey, it’s good to have you onboard Let’s get started!
          </Text>
          <Button
            bg='light'
            color='primary'
            w='150px'
            borderRadius={0}
            mt='50px'
            onClick={() => navigate('/Register')}
          >
            REGISTER
          </Button>
        </Box>
      </Box>
      <Box position='relative' w='60%'>
        <Image src={Img2} position='absolute' bottom='0' />
        <Help style={{ position: 'absolute', bottom: '50px', right: '50px' }} />
        <Box textAlign='center' w='60%' mx='auto' mt='calc(50vh - 350px)'>
          <Text fontWeight={500} fontSize='28px' color='dark' mb={10}>
            Hey, welcome back it’s good to have you back onboard!
          </Text>
          <Text
            borderBottom='4px dashed #70D709'
            color='primary'
            fontWeight={600}
            fontSize='40px'
            w='max-content'
            mb={8}
            mx='auto'
          >
            LOGIN
          </Text>

          <Input
            label='Email address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            helperProps={{
              color: 'error',
              textAlign: 'left',
              fontSize: '24px',
              fontWeight: '400',
            }}
            helperText='Forgot Password?'
          />
          <Link to='/Gallery'>
            <Button
              bg='primary'
              color='light'
              w='150px'
              borderRadius={0}
              mt='50px'
              onClick={Login}
            >
              LOGIN
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
