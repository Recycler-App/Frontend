import React from 'react'
import Sad from '../svg/Sad'

const Earn = () => {
  return (
    <section className='sec-profile sec-profile2 mt-3 p-4 col-md-8 p-md-4 gx-md-3'>
      <div>
        <h5 className='useracc'>Earnings</h5>
        <hr className='EarnHr mt-3' />
      </div>
      <article className='mt-5 total-earn p-5 text-center'>
        <h5>Total Earnings</h5>
        <h4 className='mt-4 useracc'>N 0.00</h4>
      </article>
      <article className='mt-5 art-earnn'>
        <div>
          <h5>Breakdown of Earnings</h5>
          <hr className='EarnHr mt-3' />
        </div>
        <div className='text-center mt-4'>
          <Sad style={{ margin: '0px auto' }} />
          <p className='mt-3 earn-pp'>Oops! You don’t have any earning history yet. </p>
          <p className='mt-3 mt-md-2 earn-pp'>
            When you start selling your waste you will see your earnings
            breakdown here.
          </p>
        </div>
      </article>
    </section>
  )
}

export default Earn
