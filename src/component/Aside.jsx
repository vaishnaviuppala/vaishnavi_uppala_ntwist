import React from 'react'
import aside from './aside.css'
import img3 from './images/iStock-1284372575.jpg'

function Aside() {
  return (
    <div>
      <aside id='asd1'>
        <article id='asd2'><img id='sustimg' src={img3} alt="" /></article>
        <article id='asd3'>
            <h2 id='sush2'>Sustainability</h2>
            <p class='pp'>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.</p>
            <p class='pp'>With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
            <button id='btn3'><a href="https://ntwist.com/project/sustainability-assistant/">Read More</a></button>
        </article>
      </aside>
    </div>
  )
}

export default Aside
