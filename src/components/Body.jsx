import React from 'react'
import Display from './Content/Display'
import Products from './Products'
import Reviews from './Reviews'

import "./Body.css"
import Partners from './Partners'
import ProvisionTab from './ProvisionTab'
import Newsletter from './Newsletter'

const Body = (props) => {
  return (
    <div className='container'>
      <Display />
      <Partners />
      <ProvisionTab provs={props.provs} />
      <Products prod={props.prod} arrivals={props.arrivals}/>
      <Reviews />
      <Newsletter />
    </div>
  )
}

export default Body