import React from 'react';

import Card from './UI/Card';
import './Newsletter.css'

const Newsletter = () => {
  return(
    <div>
      <Card  className="newsletter">
        <section>
          <h5>Subscribe to our newsletter</h5>
          <p>Subscribe to our weekly newsletter to stay updated and revieve all amazing rewards</p>
        </section>
        <p className='border'></p>
        <section>
          <input className="email" type="email" placeholder='Your email'/>
          <button className="button brown-button sub">Subscribe Now</button>
        </section>
      </Card>
    </div>
  )
}

export default Newsletter;