import React from 'react'
import '../style/Register.css'
import Sidebar from './Sidebar'
// import Vector2 from '../assets/Vector2.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='d-md-flex regg-sec'>
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
