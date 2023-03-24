import React from 'react'
import '../style/Profile.css'
import Ellipse1 from '../assets/Ellipse1.png'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className='mt-5 p-4'>
      <main className='sec-profile'>
        <article className='art-profile text-center'>
          <div className='mt-4'>
            <img src={Ellipse1} alt='' />
          </div>
          <div className='mt-2 profile-text text-center'>
            <h4 className='text-uppercase'>Chinonye umeh</h4>
          </div>
        </article>
        <article className='mt-3 text-center'>
          <div className='order-s'>
            <p className='profile-one'>Complete Orders</p>
            <p className='profile-two'>25</p>
          </div>
          <div className='order-s'>
            <p className='profile-one'>Incomplete Orders</p>
            <p className='profile-three'>25</p>
          </div>
          <div className='order-s'>
            <p className='profile-one'>Cancelled Orders</p>
            <p className='profile-four'>25</p>
          </div>
        </article>
        <article className='mt-5 p-3 mb-3'>
          <p className='logoutt'>Log Out</p>
        </article>
      </main>
      <main className='sec-profile mt-3 p-3'>
        <h5 className='logoutt mt-3'>Users’ Account</h5>
        <article>
          <div className='mb-3 mt-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email Address
            </label>
            <input
              type='email'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Phone Number
            </label>
            <input
              type='number'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Address
            </label>
            <input
              type='text'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              City
            </label>
            <input
              type='text'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Postal Code
            </label>
            <input
              type='number'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Country
            </label>
            <input
              type='text'
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <div className='ind-buttn mt-2'>
          <Link to='/'>
            <button className='text-uppercase mt-2'>Save Details</button>
          </Link>
        </div>
      </main>
    </section>
  )
}

export default Profile
