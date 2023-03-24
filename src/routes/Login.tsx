import { Box, Button, Flex, Image, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import Logo from '../svg/Logo'
import Img from '../assets/bro.svg'
import Img2 from '../assets/Group 50.png'
import Input from '../components/Input'
import { useNavigate } from 'react-router'
import Help from '../svg/Help'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { FcGoogle } from 'react-icons/fc'
import { useUser } from '../context/UserContext'
import { useGoogleLogin } from '@react-oauth/google'

function Login() {
  const navigate = useNavigate()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { auth, setNamee } = useContext(AuthenticationContext)
  const { setUser, storage, profile }: any = useUser()

  const Login = (e: { preventDefault: () => void }) => {
    setLoading(true)
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        window.alert('successfully Logged in')
        window.location.replace('http://localhost:3000/dashboard')
        // setType('FIREBASE_USER')
        setNamee(email)
        setLoading(false)
      })
      .catch((error) => {
        toast({
          title: 'OOPS!',
          description: error?.message,
          status: 'error',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
        setLoading(false)
      })
  }

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      storage.setItem('googleUser', JSON.stringify(codeResponse))
    },
    onError: (error: any) => {
      console.log('Login Failed:', error)
      toast({
        title: 'OOPS!',
        description: error?.message,
        status: 'error',
        variant: 'left-accent',
        duration: 4000,
        isClosable: true,
      })
    },
  })

  useEffect(() => {
    if (profile) {
      navigate('/dashboard')
    }
  }, [profile, navigate])

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
          <Flex w='100%' justify='space-around'></Flex>
          <Button
            bg='primary'
            color='light'
            w='150px'
            borderRadius={0}
            mt='50px'
            onClick={Login}
            isLoading={loading}
          >
            LOGIN
          </Button>

          <Button
            bg='light'
            color='primary'
            border='1px solid'
            borderColor='primary'
            borderRadius={0}
            mt='50px'
            onClick={() => loginWithGoogle()}
          >
            <FcGoogle style={{ fontSize: '30px' }} /> &nbsp; LOGIN WITH GOOGLE
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
