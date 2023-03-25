import React from 'react'
import '../style/Profile.css'
import Ellipse1 from '../assets/Ellipse1.png'
import { Outlet } from 'react-router'

function DashboardInnerLayout() {
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
            <Outlet/>
        </section>
    )
}

export default DashboardInnerLayout
