import React from 'react'
import Sad from '../svg/Sad'

const MyOrder = () => {
  return (
    <section className='sec-profile sec-profile2 mt-3 p-4 col-md-8 p-md-4 gx-md-3'>
      <header>
        <div className='d-flex div-orderr useracct'>
          <p>Complete Orders</p>
          <p className='ms-1 ms-md-2 ms-lg-5'>Incomplete Orders</p>
          <p className='ms-1 ms-md-2 ms-lg-5'>Cancelled Orders</p>
        </div>
        <hr className='EarnHr mt-3' />
      </header>
      <article className='text-center mt-5'>
        <Sad style={{ margin: '0px auto' }} />
        <p className='mt-3 earn-pp mt-md-4'>
          Oops! You don’t have any earning history yet.{' '}
        </p>
        <p className='mt-3 mt-md-3 earn-pp'>
          When you start selling your waste you will see your earnings breakdown
          here.
        </p>
      </article>
    </section>
  )
}

export default MyOrder
