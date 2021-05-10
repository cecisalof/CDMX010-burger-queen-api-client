import React, {Fragment} from 'react';
import './ProductCard.css'
const ProductCard = ({ product }) => {
  // --para comprobar que traemos los items iterados
  // console.log(product)

  return (
    <div>
      {/* comprobar que exiten los items */}
      {product&&
        <Fragment>
          <picture id='product-content'>
          <img src= {product.image} id= 'product-photos'></img>
          <p id='name'>{product.name}</p>
          <p id='price'>{product.price}</p>
          </picture>
        </Fragment>
      }

    </div>
  );
}

export default ProductCard
