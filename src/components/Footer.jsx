import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footers'>
        <section>
          <h5>Peak Furniture</h5>
        </section>
        <section>
          <h5>Legal</h5>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <section>
          <h5>Partner with us</h5>
          <ul>
            <li>Become a Tutor</li>
            <li>Join our team</li>
          </ul>
        </section>
        <section>
          <h5>Quick links</h5>
          <ul>
            <li>Home </li>
            <li>Courses</li>
            <li>Scholarships</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section>
          <h5>Need help?</h5>
          <ul>
            <li>FAQ's</li>
          </ul>
        </section>
        <section>
          <h5>Contact:</h5>
          <ul className='socials'>
            <li><img src="images/deviantart.png" alt="facebook"/></li>
            <li><img src="images/deviantart.png" alt="twitter"/></li>
            <li><img src="images/deviantart.png" alt="instagramx"/></li>
          </ul>
        </section>
      </div>
      <article>Copyright c 2022 PeakFurniture. All rights reserved</article>
    </div>
  )
}

export default Footer