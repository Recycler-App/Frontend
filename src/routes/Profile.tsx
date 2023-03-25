import React from 'react'
import '../style/Profile.css'
import Ellipse1 from '../assets/Ellipse1.png'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className='mt-5 p-4 sec-profile1 row p-md-5'>
      <main className='sec-profile mt-md-3 col-md-4'>
        <article className='art-profile text-center'>
          <div className='mt-4'>
            <img src={Ellipse1} alt='' />
          </div>
          <div className='mt-2 profile-text text-center'>
            <h4 className='text-uppercase'>Chinonye umeh</h4>
          </div>
        </article>
        <article className='mt-3 text-center'>
          <div>
            <p>
              Complete Orders <span className='profile-two'>25</span>
            </p>
          </div>
          <div>
            <p>
              Incomplete Orders <span className='profile-three'>26</span>
            </p>
          </div>
          <div>
            <p>
              Cancelled Orders <span className='profile-two'>27</span>
            </p>
          </div>
        </article>
        <article className='mt-5 p-3 mb-3'>
          <p className='logoutt'>Log Out</p>
        </article>
      </main>
      <main className='sec-profile sec-profile2 mt-3 p-3 col-md-8 p-md-4 gx-md-3'>
        <h5 className='useracc mt-3'>Users’ Account</h5>
        <article className='art-griid mt-md-3'>
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
          <div className='mb-3 mt-md-3'>
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
        <article className='art-griid'>
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
        <article className='art-griid'>
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
        <article className='art-griid'>
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
        <div className='ind-buttn detaiils mt-2'>
          <Link to='/'>
            <button className='text-uppercase mt-2'>Save Details</button>
          </Link>
        </div>
      </main>
    </section>
  )
}

export default Profile
