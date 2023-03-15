import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import recyclericon from '../assets/Vector.png'

function Navbar() {
  const [active, setActive] = useState('nav__menu')
  const [icon, setIcon] = useState('nav__toggler')
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active')
    } else setActive('nav__menu')

    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle')
    } else setIcon('nav__toggler')
  }
  return (
    <nav className='nav p-3 p-md-4'>
      <div className='d-flex navicon'>
        <img src={recyclericon} alt='recyclericon' />
        <p className='ms-1 iconText'>Recycler</p>
      </div>
      <ul className={active}>
        <li className='nav__itemhome text-uppercase'>
          <Link to='/'>home</Link>
        </li>
        <li className='nav__item text-uppercase'>
          <Link to='/AboutUs'>about us</Link>
        </li>
        <li className='nav__item text-uppercase'>
          <Link to='/Gallery'>gallery</Link>
        </li>
        <li className='nav__item text-uppercase'>
          <Link to='/ContactUs'>contact us</Link>
        </li>
        <li className='nav__item'>
          <Link to='/'>
            <button className='buttn p-md-2 p-2 text-uppercase'>login</button>
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/Register'>
            <button className='buttn p-md-2 p-2 text-uppercase'>
              register
            </button>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}

export default Navbar
