import React from 'react'
import "./header.css"
import Cta from "./Cta"
import me1 from "../../assets/me1.jpg"
//import avatar3 from '../../assets/avatar3.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    
    <section id="home">
          <header>
      <div className="container header_container">

        <h5> Hello I'm</h5>
        <h1> Oni-Olufemi Ayobami</h1>
        <h5 className="text-light"> Fullstack Developer </h5>

        <Cta className="dummy-cta"/>
        
        <div className="meImg">
            {/*
          <img src={avatar3} alt="" />
          
  */}
            <img src={me1} alt="This is me" className='meImg2' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
    </section>
  )
}


export default Header