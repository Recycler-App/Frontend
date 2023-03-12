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
      <article className='mt-4 p-3 mt-md-5'>
        <div className='d-flex navicon mt-3'>
          <img src={recyclericon} alt='recyclericon' />
          <h4 className='ms-1 iconText'>Recycler</h4>
        </div>
        <p className='mt-2 mainP mainPP'>
          Recycler is an innovative and unique platform that has revolutionized
          the way recycling companies and individuals handle plastic waste
          materials.
        </p>
      </article>
      <article className='mt-1 p-3 griid1'>
        <section className='mt-md-4'>
          <h4 className='text-uppercase footerText mb-1'>support</h4>
          <p className='mt-3'>Contact Us</p>
          <p className='mt-3'>Privacy Policy</p>
          <p className='mt-3'>Cookies</p>
          <p className='mt-3'>Customers</p>
          <p className='mt-3'>FAQ</p>
        </section>
        <section className='mt-4 sec-two'>
          <h4 className='text-uppercase footerText mb-1'>connect with us</h4>
          <div className='d-flex mt-3'>
            <FaPhoneAlt className='footerIcon' />
            <p className='ms-1'>+234 888 909 6654</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <AiOutlineInstagram className='footerIcon' />
            <p className='ms-1'>recycler</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <FaTwitterSquare className='footerIcon' />
            <p className='ms-1'>recycler_ng</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <FaFacebookF className='footerIcon' />
            <p className='ms-1'>Recycler Nigeria</p>
          </div>
          <div className='d-flex navicon mt-3'>
            <FaLinkedin className='footerIcon' />
            <p className='ms-1'>Recycler Nigeria</p>
          </div>
        </section>
      </article>
      <footer className='text-center copyright p-2 p-md-3'>
        <small>Copyright @ 2023 All rights reserved</small>
      </footer>
    </section>
  )
}

export default Footer
