import React from 'react'
import "./about.css"
import oniact from "../../assets/oniact.jpg"
//import avatar1 from "../../assets/avatar1.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


export const About = () => {
  return (
    <section id="about">
      <h5> Get To Know </h5>
      <h2> About me </h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-img">
            <img src={oniact} className="oniactImg" alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small> 3+ Years</small>
            </article>

              <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5> Clients </h5>
              <small> 300+ clients</small>
            </article>

              <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5> Projects </h5>
              <small> 80+ Projects</small>
            </article>

          </div>

          <p> I am Oni-Olufemi Ayobami Julius, I am a web developer that resides in Akure Nigeria. I am passionate
            programmer, who seeks and sees knowledge as a way of liberating people and bring the best out of them.
            I see coding as a wayout for the third world we are in. I will try my best to reach the pinnacle of my coding
            career.
          </p>

          <a  href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About