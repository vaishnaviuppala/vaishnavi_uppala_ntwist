import React from 'react'
import aside2 from './aside2.css'
import img5 from './images/2021-02-oil-and-gas-digital-hero-e1648984580884.png'

function Aside2() {
  return (
    <div>
      <section id='oil'>
        <article id='oil1'><img id='oilimg' src={img5} alt="" /></article>
        <article id='oil2'>
            <h2 id='oilh3'>Oil & Gas</h2>
             <p class='oilp1'>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. </p>
             <p class='oilp1'>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</p>
             <button id='btn5'><a href="https://ntwist.com/oil-gas/">Read More</a></button>
        </article >
      </section>
    </div>
  )
}

export default Aside2
