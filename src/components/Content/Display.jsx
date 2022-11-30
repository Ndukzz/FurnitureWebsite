 import React from 'react'

 import "./Display.css"

const Display = () => {
  return (
    <div className="intro">
      <div className='heading'>
        <h1>Furniture For Peak Luxury</h1>
        <p>We provide you with excellent and luxurious furniture with pocket friendly prices.</p>
        <button className='brown-button myButton'>Get started</button>
      </div>
      <img src="./chair.jpg" alt="hey bitch" />
    </div> 
  )
}

export default Display