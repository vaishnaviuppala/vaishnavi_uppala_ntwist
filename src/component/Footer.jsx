import React from 'react'
import footer from './footer.css'
import 'boxicons'

function Footer() {
  return (
    <div>
      <article id='foot'>
      <img id='imgf' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
      <ul id='ful'>
        <li> <a href="https://ntwist.com/ntwist-cloned-4582/">Home</a></li>
        <li> <a href="https://ntwist.com/about-us/">About Us</a></li>
        <li><a href="https://ntwist.com/contact-us/">Contact Us</a></li>
        <li> <a href="https://ntwist.com/privacy-policy/">Privacy Policy</a></li>
        <li> <a href="https://ntwist.com/sitemap/">Sitemap</a></li>
      </ul>
      <p id='fp'>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      <ul id='ful2'>
      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FIncNtwist"><li><box-icon class="demo" type='logo' name='twitter'></box-icon></li></a>
      <a href="https://www.linkedin.com/company/ntwist"><li><box-icon class="demo" type='logo' name='linkedin-square'></box-icon></li></a>
      </ul>
      <p id='fll2'>© 2022. Ntwist Inc.</p>

      </article>
    </div>
  )
}

export default Footer
