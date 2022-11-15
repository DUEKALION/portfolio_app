import React from 'react'
import Ayobami from '../../assets/Ayobami.docx'


function Cta() {
  return (
      <div className='cta'>
          <a href={Ayobami} download className="btn cta1"> Download CV</a>
          <a href="#contact" className='btn btn-primary cta2'>Let's talk</a>
    </div>
  )
}

export default Cta