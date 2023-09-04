import React from 'react'
import section from './section.css'
import img1 from './ntwistlight (1).png'
import img2 from './images/home-image-icons-v6.png'


function Section() {
  return (
    <div id="bgimg">
      <aside id='asdd1'>
      <ol id='demo1'>
      <li><img id="imm1" src={img1} alt="" /></li>
      </ol>
      <ol id='demo'>
       
        <li><a id='home' href="https://ntwist.com">Home</a></li>
        <li> Industries</li>
        <li><a href="https://ntwist.com/ai-software/">AI Software</a></li>
        <li><a href="https://ntwist.com/blog/">Blog</a></li>
        <li><a href="https://ntwist.com/contact-us/">Contact Us</a></li>
      </ol>
      </aside>
        <article id="art1">
            <section id="data"><h1 id="dd">Data Powered Solutions <br/> Industrial Excellence</h1>
            <button id="btn"> <a href="https://ntwist.com/mine-to-mill-to-mine-optimization">Read More</a></button></section>
            <section id="ntwist"><img id="icon2" src={img2} alt="" /></section>
        </article>
    </div>
  )
}

export default Section
