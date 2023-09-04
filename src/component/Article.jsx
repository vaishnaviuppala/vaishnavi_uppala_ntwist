import React from 'react'
import article from './article.css'
import img2 from './images/iStock-1339284457-2048x1365.jpg'

function Article() {
  return (
    <div>
      <section id="mill2">
        <article id="mill"><h2 id='milh2'>Mine-To-Mill-Mill-To-Mine<br/>Optimization</h2>
        <p id='p1'>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
        <button id='btn2'><a href="https://ntwist.com/mine-to-mill-to-mine-optimization/">Read More</a></button>
        </article>
        <article id="millimg"><img id='imgg' src={img2} alt="" />
       
        </article>
      </section>
    </div>
  )
}

export default Article
