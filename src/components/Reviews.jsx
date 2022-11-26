import React from 'react'

import Card from './UI/Card'
import './Review.css'

const Reviews = () => {
  return (
    <>
        <h4>What our customers say about us</h4>
      <div className="reviews">
        <Card className="review">
          <section className="review__section">
            <img src="./images/johndoe.png" alt="John Doe's pic" />
            <p>John Doe</p>
          </section>
          <p>Peak furniture provides the best of furniture i have ever used</p>
        </Card>
        
        <Card className="review">
          <section className="review__section">
            <img src="./images/johndoe.png" alt="John Doe's pic" />
            <p>John Doe</p>
          </section>
          <p>Peak furniture provides the best of furniture i have ever used</p>
        </Card>

        <Card className="review">
          <section className="review__section">
            <img src="./images/johndoe.png" alt="John Doe's pic" />
            <p>John Doe</p>
          </section>
          <p>Peak furniture provides the best of furniture i have ever used</p>
        </Card>
      </div>
    </>
  )
}

export default Reviews