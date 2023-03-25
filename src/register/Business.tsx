import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AuthenticationContext } from '../context/AuthenticationContext'
import Side from './Side'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { getDatabase, ref, get, set} from "firebase/database";
import Alert from '../components/Alert'
import Logo from '../svg/Logo'

const Business = () => {
  const googleProvider = new GoogleAuthProvider();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(AuthenticationContext);
  const [loading, setLoading] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false)
  const navigate = useNavigate()
  const toast = useToast();
  const db:any = getDatabase();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        set(ref(db, `users/${user.uid}`), {
          name: name,
          email: email,
          phone: phone,
          img: null,
          userType: "business"
        });
        onOpen()
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

  const signupWithGoogle = async () => {
    setLoadingTwo(true)
    const res:any = await await signInWithPopup(auth, googleProvider)
    const user = res.user;
    // check if user exists in the database
    const userRef = ref(db, `users/${user.uid}`);
    get(userRef).then((snapshot:any) => {
      if (snapshot.exists()) {
        toast({
          title: 'OOPS!',
          description: "This user already exists",
          status: 'error',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
      } else {
        set(ref(db, `users/${user.uid}`), {
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          img: user.photoURL,
          userType: "business"
        });
        onOpen()
      }
      setLoadingTwo(false)
      }).catch((error:any) => {
        toast({
          title: 'OOPS!',
          description: error?.message,
          status: 'error',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
        setLoadingTwo(false)
      });
  }


  return (
    <section className='d-md-flex regg-sec secc'>
      <Flex onClick={() => navigate('/')} cursor='pointer' display={{base:"flex", md:"none"}} p={5}>
        <Logo/>
        <Text fontWeight={500} fontSize='25px'>
          {' '}
          Recycler
        </Text>
      </Flex>
      <article>
        <Side />
      </article>
      <article className='text-center p-4 mt-3 reg-ind'>
        <h4>Register here as a business</h4>
        <div className='div-ind mt-4 mt-md-2'>
          <h2>REGISTER</h2>
          <img
            className='text-center'
            src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/Line2.png'
            alt='line2'
          />
        </div>
        <section className='mt-4 text-start'>
          <form>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Business Name <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Business Mobile Number{' '}
                <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='number'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Business Email Address{' '}
                <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Create Password <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='mb-4'>
              <small>
                Password must contain a number, uppercase letter, lowercase
                letter and symbol
              </small>
            </div>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Button
                bg='primary'
                color='light'
                w='150px'
                borderRadius={0}
                onClick={onSubmit}
                isLoading={loading}
              >
                REGISTER
              </Button>
              <Text fontWeight={600} fontSize='15px' color='accent' my={5}>Or signup with</Text>

              <Button
                bg='light'
                color='primary'
                border='1px solid'
                borderColor='primary'
                borderRadius={0}
                onClick={() => signupWithGoogle()}
                isLoading={loadingTwo}
              >
                <FcGoogle style={{ fontSize: '30px' }} /> &nbsp; SIGNUP WITH GOOGLE
              </Button>
            </Box>
          </form>
        </section>
        <footer className='regImg-ind'>
          <img
            className='position-absolute bottom-0 end-0 p-2'
            src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/Vector3.svg'
            alt='Vector2'
          />
        </footer>
      </article>
      <Alert
        title={"Sign up successful"}
        body={<Box display="flex" flexDirection="column" alignItems="center">
          <iframe src="https://embed.lottiefiles.com/animation/73392" title="success"></iframe>
          <Text>You can proceed to login to your newly created account.</Text>
        </Box>}
        actionText={"Proceed"}
        action={() => navigate("/login")}
        isOpen={isOpen}
        onClose={onClose}
        bg="primary"
      />
    </section>
  )
}

export default Business
