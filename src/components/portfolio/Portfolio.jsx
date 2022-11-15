import React from 'react'
import "./portfolio.css"

import port1 from "../../assets/port1.png"
import port2 from "../../assets/port2.png"
import port3 from "../../assets/port3.png"
import port4 from "../../assets/port4.png"
import port5 from "../../assets/port5.png"
import port6 from "../../assets/port6.png"

function Portfolio() {

  const imgData = [

    {
      id: 1,
      image: port1,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://dribbble.com"
    },

    {
      id: 2,
      image: port2,
      title: "Charts templates & Infographics in Figma",
      github: "https://github.com",
      demo: "https://dribbble.com"
    },

    {
      id: 3,
      image: port3,
      title: "Figma Dashboard UI Kit For Data Design Web Apps",
      github: "https://github.com",
      demo: "https://dribbble.com"
    },

    {
      id: 4,
      image: port4,
      title: "Maintaining tasks and tracking progress",
      github: "https://github.com",
      demo: "https://dribbble.com"
    },

    {
      id: 5,
      image: port5,
      title: "Charts templates & Infographics in Figma",
      github: "https://github.com",
      demo: "https://dribbble.com"
    },

    {
      id: 6,
      image: port6,
      title: "Artificial Intelligence and Desing Prescription",
      github: "https://github.com",
      demo: "https://dribbble.com"
    },

  ]

  const [imgD, setImgD] = React.useState(imgData)


  const printData = imgD.map(item => (
      
      <article className="portfolio_item" key={item.id}>

          <div className="portfolio_item-img">
            <img src={item.image} className="portfolioImage" alt="" />
          </div>

        <h3>{item.title}</h3>
          <div className="portfolio_item-cta">
             <a href={item.github} className="btn">Github</a>
          <a href={item.demo} className="btn btn-primary"> Live Demo</a>
        </div>
        </article>
    
  ))
  return (
    <section id="port-folio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

        {/* ``````````````````` FIRST PORTFOLIO  TEMPLATE `````````````````````````````````` */}
        {printData}

      </div>
    </section>
  )
}

export default Portfolio