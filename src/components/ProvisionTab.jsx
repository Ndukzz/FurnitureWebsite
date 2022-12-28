import React from 'react'

import './ProvisionTab.css'
import Card from './UI/Card'

const ProvisionTab = (props) => {
  return (
    <>
      <h4>What we provide?</h4>
      <div className="provisions">
      {props.provs.map((prov)=> {
        return[
          <Card className="provision__item" key={prov.id}>
            <h3>{prov.title}</h3>
            <p>{prov.description}</p>
            <p className='discover'>Discover More </p>
          </Card>
        ]
      })}
    </div>
    </>
 
  )
}

export default ProvisionTab