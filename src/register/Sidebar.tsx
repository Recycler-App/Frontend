import React from 'react'
import recyclericon from '../assets/Vector1.png'
import pana1 from '../assets/pana1.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className='reg-sec p-4'>
      <nav className='d-flex navicon'>
        <img src={recyclericon} alt='recyclericon' />
        <p className='ms-1 iconText'>Recycler</p>
      </nav>
      <main className='mt-5 text-center'>
        <img
          className='p-3 main-img'
          src={pana1}
          alt='pana1'
        />
        <section className='mt-4 sec-sidebar'>
          <p>Hey, welcome back it’s good to have you back onboard!</p>
          <div className='mt-4 side-div mb-4'>
            <button className='text-uppercase'>
              <Link to='/Login'>login</Link>
            </button>
          </div>
        </section>
      </main>
    </section>
  )
}

export default Sidebar
