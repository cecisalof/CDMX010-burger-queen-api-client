import React, {Fragment} from 'react';
import './ProductCard.css'
import Cart from './Cart.js'
 
const ProductCard = ({ product, products, cart, setCart}) => {
 // --para comprobar que traemos los items iterados
 // console.log(product)
 
 const {name, price, _id} = product;
 // console.log("list of products id", product._id)
 
  const addProduct = (id) => {
   // console.log("product id inside addProducts function", id)
   // console.log("products.result inside addProduct function ", products.result)
   const productObject = products.result;
   const matchId = productObject.filter( product => product._id === id )
   console.log(matchId)
   console.log(product)
   setCart([...cart, ...matchId])
 }
 
 return (
   <div>
     {/* comprobar que exiten los items */}
     {product&&
       <Fragment>
         <div id='product-content' onClick= {() => addProduct(_id)}>
         <img src= {product.image} id= 'product-photos'></img>
         <p id='name'>{product.name}</p>
         <p id='price'>{product.price}</p>
         </div>
       </Fragment>
     }
 
   </div>
 );
}
 
export default ProductCard
