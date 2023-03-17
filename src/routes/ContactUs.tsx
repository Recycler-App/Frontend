import React from 'react'
import '../style/ContactUs.css'
import amico from '../assets/amico.png'

const ContactUs = () => {
  return (
    <section>
      <section className='p-4'>
        <div className='con-main p-3'>
          <main className='mt-4'>
            <h4>Get in Touch</h4>
            <p className='mt-1'>We are here for you! How can we help?</p>
            <section className='mt-4 text-start'>
              <form>
                <div className='mb-3'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='mb-4'>
                  <textarea
                    className='form-control'
                    placeholder='Write your message here'
                    id='exampleFormControlTextarea1'
                    rows={7}
                    cols={20}
                  ></textarea>
                </div>
                <div className='ind-buttn mb-4'>
                  <button className='text-uppercase mt-2'>Submit</button>
                </div>
              </form>
            </section>
          </main>
          <article className='con-art mt-md-4'>
            <img src={amico} alt='amico' />
          </article>
        </div>
      </section>
    </section>
  )
}

export default ContactUs
