import React from 'react'
import ProductCard from './ProductCard'
 
 
// eslint-disable-next-line react/prop-types
const Cart = ({ cart, setCart}) => {
 return (
   <div>
       <h3>Resumen de pedido</h3>
       {cart.length === 0 ? (<p>0</p>) : (cart.map(product => 
       <ProductCard key={product._id} product={product} cart={cart} setCart={setCart} /> ))}
   </div>
 )
};
 
export default Cart;
