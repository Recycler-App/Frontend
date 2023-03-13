import React from 'react'
import '../style/Navbar.css'
import '../style/Footer.css'
import Navbar from './Navbar'
import Footer from './Footer'
import pana from '../assets/pana.png'
import chisom from '../assets/chisom.jpg'
import maureen from '../assets/maureen.png'
import lydia from '../assets/lydia.png'

const AboutUs = () => {
  return (
    <div>
      <section>
        <Navbar />
        <main className='mt-4 p-3 p-md-4 mt-md-5'>
          <p className='text-uppercase headingText'>about us</p>
          <article className='mt-3'>
            <img className='panaImage' src={pana} alt='pana' />
            <section className='gridd'>
              <p className='mainP mt-3'>
                Founded in 2023, our mission is to connect recycling companies
                and individuals who have plastic waste materials to recycle in
                an efficient and convenient way. Recycler is committed to
                providing the best possible service to our customers and
                partners. We strive to provide a safe and secure platform for
                our users, while also making sure that our users are able to
                make informed decisions regarding their plastic waste materials.{' '}
              </p>
              <img className='panaImage1' src={pana} alt='pana' />
            </section>
          </article>
          <article>
            <p className='mainP mt-3'>
              We believe that through our platform, we can help contribute to a
              more sustainable future. By providing an efficient and convenient
              platform for recycling plastic materials, we are helping to reduce
              the amount of plastic waste that enters our landfills and oceans.
              In addition, we are helping to reduce the amount of energy and
              resources used to create new plastic products. At Recycler, we are
              committed to making a positive contribution to the environment and
              our local communities. We are proud to be part of the growing
              effort to reduce our global plastic waste footprint and to create
              a more sustainable world for future generations. We invite you to
              join us in our mission to provide a convenient and efficient way
              for people to recycle their plastic waste materials. Together, we
              can help create a better and more sustainable future.
            </p>
          </article>
        </main>
        <main className='mt-2 p-3'>
          <p className='text-uppercase headingText'>meet the team</p>
          <section className='mt-4 section-one mt-md-3'>
            <div className='teamImg text-center mt-md-3'>
              <img className='mt-3 mt-md-2' src={maureen} alt='maureen' />
              <div className='p-3 div-one'>
                <h3>Anyanwu Maureen</h3>
                <p>Front-end Engineer</p>
              </div>
            </div>
            <div className='teamImg text-center mt-3'>
              <img className='mt-3 mt-md-2 teamimg' src={chisom} alt='chisom' />
              <div className='p-3 div-one'>
                <h3>Chukwuma Chisom</h3>
                <p>Front-end Engineer</p>
              </div>
            </div>
            <div className='teamImg text-center mt-3'>
              <img className='mt-3 mt-md-2' src={lydia} alt='lydia' />
              <div className='p-3 div-one'>
                <h3>Umeh chinonye lydia</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <div className='teamImg text-center mt-3'>
              <img className='mt-3 mt-md-2' src={lydia} alt='lydia' />
              <div className='p-3 div-one'>
                <h3>Umeh Chinonye Lydia</h3>
                <p>Back-end Engineer</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    </div>
  )
}

export default AboutUs
