import React from 'react'
import "../Style/content.css"


const Contentbox = ({ product }) => {
    
  return (
    <>
      <div className="content-box">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p>Price : ${product.price}</p>
        <div className="btn">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default Contentbox
