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
          <p>Legal</p>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <section>
          <p>Partner with us</p>
          <ul>
            <li>Become a Tutor</li>
            <li>Join our team</li>
          </ul>
        </section>
        <section>
          <p>Quick links</p>
          <ul>
            <li>Home </li>
            <li>Courses</li>
            <li>Scholarships</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section>
          <p>Need help?</p>
          <ul>
            <li>FAQ's</li>
          </ul>
        </section>
        <section>
          <p>Contact:</p>
          <ul className='socials'>
            <a href="https://www.instagram.com/_ndukz_._/" target="_blank" rel="noreferrer">
              <img src="images/instagram.png" alt="instagram"/>
            </a>
            <a href="https://twitter.com/Ndukz__" target="_blank" rel="noreferrer">
              <img src="images/twitter.png" alt="twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/ebuka-ndukwe-6a962721a/" target="_blank" rel="noreferrer">
              <img src="images/linkedin.png" alt="linkedin"/>
            </a>
          </ul>
        </section>
      </div>
      <article>Copyright c 2022 PeakFurniture. All rights reserved</article>
    </div>
  )
}

export default Footer