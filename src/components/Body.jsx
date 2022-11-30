import React from 'react'
import Display from './Content/Display'
import Products from './Products'
import Reviews from './Reviews'

import "./Body.css"
import Partners from './Partners'
import ProvisionTab from './ProvisionTab'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Body = (props) => {
  return (
    <div >
      <div className='container'>
        <Display />
        <Partners />
        <ProvisionTab provs={props.provs} />
        <Products prod={props.prod} arrivals={props.arrivals}/>
        <Reviews />
        <Newsletter />
      </div>

      <Footer />

    </div>
  )
}

export default Body