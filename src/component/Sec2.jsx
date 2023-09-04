import React from 'react'
import sec2 from './sec2.css'
import img4 from './images/iStock-1322302283.jpg'

function Sec2() {
  return (
    <div>
      <article id='arr1'>
        <aside id='sde1'>
            <h2 id='minh2'>Mineral Processing</h2>
        <p id='p3'>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
        <button id='btn4'> <a href="https://ntwist.com/metal-mining/">Read More</a></button>
        </aside>
        <aside id='sde2'><img id='iimg' src={img4} alt="" /></aside>
      </article>
    </div>
  )
}

export default Sec2
