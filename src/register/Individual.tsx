import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AuthenticationContext } from '../context/AuthenticationContext'
import Side from './Side'
import { Link } from 'react-router-dom'
// import line2 from '../assets/Line2.png'
// import Vector2 from '../assets/Vector2.png'

const Individual = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(AuthenticationContext)

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const res = await fetch(
      'https://recycler-app-a97f0-default-rtdb.firebaseio.com/Individualform.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
      }
    )

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        window.alert('successfully registered')
        window.location.replace('http://localhost:3000/Login')
      })
      .catch((error) => {
        const errorMessage = error.message
        window.alert(errorMessage)
      })
  }

  return (
    <section className='d-md-flex regg-sec secc'>
      <article>
        <Side />
      </article>
      <article className='text-center p-4 mt-3 reg-ind'>
        <h4>Register here as an individual user</h4>
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
                Your Name <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Phone Number <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='number'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Email Address <span className='text-danger fs-5'>*</span>
              </label>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
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
              <Link to='/Login'>
                <button className='text-uppercase mt-2' onClick={onSubmit}>
                  Register
                </button>
              </Link>
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

export default Individual
