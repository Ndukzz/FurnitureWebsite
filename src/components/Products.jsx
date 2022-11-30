import React from 'react';

import Card from './UI/Card';
import './Products.css'

//create a css file for this file  and create a seperate directory for the data

const Products = (props) => {

  console.log(props.prod)
  return(
    <>
      <div className="products__heading">
        <h5>Popular Products</h5>
        <p>See All</p>
      </div>
      
      <div className="products">
        {props.prod.map((prod)=> {
          return[
            <Card className="product-card" key={prod.id}>
              <img src={prod.pic} alt="just a couch" />
              <section className='description'>
                <div className="products">
                <p className="title">{prod.title}</p>
                <p>${prod.price}</p>
              </div>
              <p>{prod.comment}</p>
              <div className="shop">
                <a href="/theShop">Shop now</a>
                <p>*****</p>
              </div>
              </section>
            </Card>
          ]
        })}
      </div>

      <div className="products__heading">
        <h5>New Arrivals</h5>
        <p>See All</p>
      </div>
      <div className="products">
        {props.arrivals.map((arrival)=>{
          return [
            <Card className="arrival-card" key={arrival.id}>
              <img src={arrival.pic} alt="a new arrival"/>
              <section className='description'>
                <div className="arrival">
                <p className="title">{arrival.title}</p>
                <p>{arrival.description}</p>
              </div>
              </section>
            </Card>
          ]
        })}
      </div>
    </>
  )
};

export default Products;