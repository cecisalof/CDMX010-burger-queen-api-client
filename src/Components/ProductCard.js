import React, {Fragment} from 'react';
import './ProductCard.css'
import data from '../data/db.json'

const products = data.products;
console.log(products);

const ProductCard = ({ product }) => {
  // --para comprobar que traemos los items iterados
  console.log(products)
  // console.log("products", products)
  
  return (
    <div>
      {/* comprobar que exiten los items */}
      {products&&
        <Fragment>
          <picture id='product-content'>
          <img src= {products.image} id= 'product-photos'></img>
          <p id='name'>{products.name}</p>
          <p id='price'>{products.price}</p>
          </picture>
        </Fragment>
      }
    </div>
  );
}

export default ProductCard
