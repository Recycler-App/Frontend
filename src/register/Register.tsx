import React from 'react'
import '../style/Register.css'
import Sidebar from './Sidebar'
// import Vector2 from '../assets/Vector2.png'
import { Link, useNavigate } from 'react-router-dom'
import { Flex, Text } from '@chakra-ui/react'
import Logo from '../svg/Logo'

const Register = () => {
  const navigate = useNavigate()
  return (
    <section className='d-md-flex regg-sec'>
      <Flex onClick={() => navigate('/')} cursor='pointer' display={{base:"flex", md:"none"}} p={5}>
        <Logo/>
        <Text fontWeight={500} fontSize='25px'>
          {' '}
          Recycler
        </Text>
      </Flex>
      <article>
        <Sidebar />
      </article>
      <article className='text-center p-4 reg-art'>
        <h4>Do you want to register as an individual or as a business?</h4>
        <section className='sec-reg'>
          <Link to='/Business'>
            <button className='reg-buttn mt-5'>REGISTER AS A BUSINESS</button>
          </Link>
          <Link to='/Individual'>
            <button className='reg-buttn mt-5'>
              REGISTER AS AN INDIVIDUAL
            </button>
          </Link>
        </section>
        <footer className='reg-img'>
          <img
            className='position-absolute bottom-0 end-0 p-2'
            src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/Vector3.svg'
            alt='Vector2'
          />
        </footer>
      </article>
    </section>
  )
}

export default Register
