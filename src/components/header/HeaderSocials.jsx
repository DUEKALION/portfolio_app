import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaDribbbleSquare } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
      
      <div className='header_socials'>
          <a href="https://linkedin.com"> <BsLinkedin/></a>
          <a href="https://github.com" > <BsGithub/> </a>
          <a href="https://dribble.com"> <FaDribbbleSquare /> </a>
    </div>

  )
}

export default HeaderSocials