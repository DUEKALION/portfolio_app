import React from 'react'
import finishing_strong from '../../assets/finishing_strong.pdf'

function Cta() {
  return (
      <div className='cta'>
          <a href={finishing_strong} download className="btn cta1"> Download CV</a>
          <a href="#contact" className='btn btn-primary cta2'>Let's talk</a>
    </div>
  )
}

export default Cta