import React from 'react'
import '../style/Gallery.css'
import plastic1 from '../assets/plastic1.png'
import plastic2 from '../assets/plastic2.png'
import plastic3 from '../assets/plastic3.png'
import plastic4 from '../assets/plastic4.png'
import plastic5 from '../assets/plastic5.png'
import plastic6 from '../assets/plastic6.png'
import plastic7 from '../assets/plastic7.png'
import plastic8 from '../assets/plastic8.png'
import plastic9 from '../assets/plastic9.png'
import plastic10 from '../assets/plastic10.png'

const Gallery = () => {
  return (
    <section>
      <main className='p-5'>
        <section className='mt-2 sec-gal'>
          <h4>OUR GALLERY</h4>
          <p className='mt-1'>Dangers of not recycling your waste</p>
          <article className='mt-4 gal-art'>
            <div className='container gal-div1 mt-md-3'>
              <img src={plastic1} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>
                  Increased Soil Pollutants can Enter the Body Through Food
                  Chain and Cause Health Issues
                </div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic2} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>Contamination of Drinking Water</div>
              </div>
            </div>
            <div className='container mt-3 gal-div1'>
              <img src={plastic3} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>
                  The Endangerment and Extinction of Species
                </div>
              </div>
            </div>
            <div className='container mt-3 gal-div1'>
              <img src={plastic4} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>
                  Increased Human Health Issues Including Cancer, Respiratory
                  Illness, and Congenital Disabilities Caused by Exposure to
                  Harmful Chemicals
                </div>
              </div>
            </div>
            <div className='container mt-3'>
              <img src={plastic5} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>
                  Habitants and Plants where Animals and Plants Wiped out in
                  Certain Areas
                </div>
              </div>
            </div>
            <div className='container mt-3 gal-div1'>
              <img src={plastic6} alt='Avatar' className='imagee' />
              <div className='middle'>
                <div className='textt'>
                  Increased Air Pollution Which Burning Wastes Contributes to
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className='mt-4 sec-gal'>
          <h4 className='text-capitalize'>Our agents at work</h4>
          <article className='gal-grid'>
            <section className='galgrid d-md-flex'>
              <div className='container mt-3 gal-div1'>
                <img src={plastic7} alt='Avatar' className='imagee' />
                <div className='middle'>
                  <div className='textt'>John Doe</div>
                </div>
              </div>
              <div className='container mt-3 gal-div1'>
                <img src={plastic9} alt='Avatar' className='imagee' />
                <div className='middle'>
                  <div className='textt'>John Doe</div>
                </div>
              </div>
            </section>
            <section className='galgrid'>
              <div className='container mt-3'>
                <img src={plastic8} alt='Avatar' className='imagee' />
                <div className='middle'>
                  <div className='textt'>John Doe</div>
                </div>
              </div>
              <div className='container mt-3 gal-div1'>
                <img src={plastic10} alt='Avatar' className='imagee' />
                <div className='middle'>
                  <div className='textt'>John Doe</div>
                </div>
              </div>
            </section>
          </article>
        </section>
      </main>
    </section>
  )
}

export default Gallery
