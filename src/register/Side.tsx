import React from 'react'
// import recyclericon from '../assets/Vector1.png'
// import pana1 from '../assets/pana1.png'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

const Side = () => {
  return (
    <section className='reg-sec secc p-4'>
      <nav className='d-flex navicon'>
        <img src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/Vector1.png' alt='Vector1' />
        <p className='ms-1 iconText'>Recycler</p>
      </nav>
      <main className='mt-5 text-center'>
        <img className='p-3 main-img' src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/pana1.png' alt='pana1' />
        <section className='mt-4 sec-sidebar mt-md-5'>
          <p>Hey, welcome back it’s good to have you back onboard!</p>
          <div className='mt-4 side-div mb-4'>
            <button className='text-uppercase'>
              <Link to='/login'>login</Link>
            </button>
          </div>
        </section>
        <Link to='/Register'>
          <footer className='d-flex sideicon'>
            <MdArrowBack className='mt-md-2' />
            <p className='ms-1 iconText'>Back</p>
          </footer>
        </Link>
      </main>
    </section>
  )
}

export default Side
