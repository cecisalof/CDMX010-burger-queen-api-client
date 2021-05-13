// --aqui ira todo lo de la comanda
import React from 'react'
import './Cart.css'
import ProductCard from './ProductCard'
import axios from 'react'


// const orderInfo = {
//   args: {
//   userId: email,
//   product: 

//   }
// }

const Cart = ({cart, setCart, product, products}) => {

  const createOrder = (products) => {
  console.log("product inside create Order", products)
  const userObject = JSON.parse(localStorage.getItem('access'));
  console.log('user Id', userObject.user.id);
  //  const matchIdAdd = cart.find((product)=> product._id === id);
  //   console.log(matchIdAdd)
   

//    if(userObject){
//     axios.post('http://localhost:8080/order/', {
//     data: orderInfo,  
  
  
 
//     //  userId: userObject._id
//       // email: user.email, 
//       // cliente: client,
//       // [ "products": {
//       //   id: product.id,
//       //   qty: product.qty,
//       // }]
//   }).then(response => {
//     console.log('axios post order response:', response);
// }
//   )};
  }

  // Traer los valores de la cantidad de productos y el id del producto. 
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
              <button onClick={() => createOrder(product)}>Hacer pedido</button>
            </div>
          )}   
    </div>
  )
}

export default Cart
