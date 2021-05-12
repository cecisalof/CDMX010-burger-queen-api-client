// --aqui ira todo lo de la comanda
import React from 'react'
import './Cart.css'
import ProductCard from './ProductCard'


const Cart = ({cart, setCart}) => {

  const createOrder = () => {
   const userObject = JSON.parse(localStorage.getItem('access'));
   console.log('userObject.user', userObject.user);

  }

  const productPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = productPrice * 0.16;
  const totalPrice = productPrice + taxPrice;

  // definiendo variables para hacer la suma

  return (
    <div className='cart-content'>
      <h3>Resumen del pedido</h3>
      {cart.length === 0 ?(<div>orden vacia</div>) : (cart.map((product => <ProductCard key={product._id} product={product} cart={cart} setCart={setCart} /> )))}
      {cart.length !== 0 &&(
            <>
            <div>
            <div>Precio productos</div>
            <div>${productPrice.toFixed(2)}</div>
            </div>
            <div>
            <div>Precio IVA</div>
            <div>${taxPrice.toFixed(2)}</div>
            </div>
            <div>
            <div><strong>TOTAL</strong></div>
            <div>${totalPrice.toFixed(2)}</div>
            </div>
            </>
          )}
      {cart.length > 0 &&(    
            <div>
              <button onClick={() => createOrder()}>Hacer pedido</button>
            </div>
          )}   
    </div>
  )
}

export default Cart
