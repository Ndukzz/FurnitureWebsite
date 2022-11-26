import React from 'react'

import Card from './UI/Card'
import classes from './Partners.module.css'

const Partners = () => {
  return (
    <Card className={classes.partnersCard}>
      <div className={classes.partners}>
        <div>Our Partners: </div>
        <ol className={classes.partnerImages}>
          <li><img className={classes.partnerImage} src="./images/delicious.png" alt="first partner" /></li>
          <li><img className={classes.partnerImage} src="./images/buffer.png" alt="second partner" /></li>
          <li><img className={classes.partnerImage} src="./images/deviantart.png" alt="third partner" /></li>
          <li><img className={classes.partnerImage} src="./images/shutterstock.png" alt="fourth partner" /></li>
        </ol>
      </div>
    </Card>
  )
}

export default Partners