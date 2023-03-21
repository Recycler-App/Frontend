import React from 'react'
import Side from './Side'
// import line2 from '../assets/Line2.png'
// import Vector2 from '../assets/Vector2.png'

const Business = () => {
  return (
    <section className='d-md-flex regg-sec secc'>
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
            <div className='ind-buttn'>
              <button className='text-uppercase mt-2'>Register</button>
            </div>
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
    </section>
  )
}

export default Business