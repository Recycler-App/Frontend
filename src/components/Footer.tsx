import React from 'react'
import recyclericon from '../assets/Vector.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='mt-2 sec-one'>
      <article className='mt-4 p-3'>
        <div className='d-flex navicon mt-3'>
          <img src={recyclericon} alt='recyclericon' />
          <h4 className='ms-1 iconText'>Recycler</h4>
        </div>
        <p className='mt-2 mainP'>
          Recycler is an innovative and unique platform that has revolutionized
          the way recycling companies and individuals handle plastic waste
          materials.
        </p>
      </article>
      <article className='mt-1 p-3'>
        <section>
          <h4 className='text-uppercase footerText mb-1'>support</h4>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>Customers</p>
          <p>FAQ</p>
        </section>
        <section className='mt-4'>
          <h4 className='text-uppercase footerText mb-1'>connect with us</h4>
          <div className='d-flex mt-3'>
            <FaPhoneAlt className='footerIcon'/>
            <p className='ms-1'>+234 888 909 6654</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <AiOutlineInstagram className='footerIcon'/>
            <p className='ms-1'>recycler</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <FaTwitterSquare className='footerIcon'/>
            <p className='ms-1'>recycler_ng</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <FaFacebookF className='footerIcon'/>
            <p className='ms-1'>Recycler Nigeria</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <FaLinkedin className='footerIcon'/>
            <p className='ms-1'>Recycler Nigeria</p>
          </div>
        </section>
      </article>
      <footer className='text-center'>
        <small>Copyright @ 2023 All rights reserved</small>
      </footer>
    </section>
  )
}

export default Footer
