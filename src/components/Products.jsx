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
            <div className="products">
              <p>{prod.title}</p>
              <p>{prod.price}</p>
            </div>
            <p>{prod.comment}</p>
            <section className="shop">
              <p>Shop now</p>
              <p>*****</p>
            </section >
          </Card>
        ]
        })}
      </div>
      <div className="products__heading">
        <h5>New Arrivals</h5>
        <p>See All</p>
      </div>
      <div>
        {//recreate this here and download the resetstylesheet
          //the arrivals data has been passed into props
          //the rest: reviews, newsletter and footer
        }
      </div>
    </>
  )
};

export default Products;