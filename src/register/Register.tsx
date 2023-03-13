import React from 'react'
import '../style/Register.css'
import Sidebar from './Sidebar'
import Vector2 from '../assets/Vector2.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='d-md-flex'>
      <article>
        <Sidebar />
      </article>
      <article className='text-center p-4 reg-art'>
        <h4>Do you want to register as an individual or as a business?</h4>
        <section className='sec-reg'>
          <button className='reg-buttn mt-5'>
            <Link to='/Business'>REGISTER AS A BUSINESS</Link>
          </button>
          <button className='reg-buttn mt-5'>
            <Link to='/Individual'>REGISTER AS AN INDIVIDUAL</Link>
          </button>
        </section>
        <footer className='reg-img'>
          <img
            className='position-absolute bottom-0 end-0 p-2'
            src={Vector2}
            alt='Vector2'
          />
        </footer>
      </article>
    </section>
  )
}

export default Register
