import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../style/Gallery.css'
import plastic1 from '../assets/plastic1.png'
import plastic2 from '../assets/plastic2.png'
import plastic3 from '../assets/plastic3.png'
import plastic4 from '../assets/plastic4.png'
import plastic5 from '../assets/plastic5.png'
import plastic6 from '../assets/plastic6.png'

const Gallery = () => {
  return (
    <section>
      <Navbar />
      <main className='p-4'>
        <section className='mt-3 sec-gal'>
          <h4>OUR GALLERY</h4>
          <p className='mt-1'>Dangers of not recycling your waste</p>
          <article className='mt-4'>
            <div className='container'>
              <img src={plastic1} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic2} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic3} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic4} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic5} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic6} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
          </article>
        </section>
        <section className='mt-4 sec-gal'>
          <h4 className='text-capitalize'>Our agents at work</h4>
          <article>
            <div className='container mt-3'>
              <img src={plastic6} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic6} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic6} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic6} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>John Doe</div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </section>
  )
}

export default Gallery
