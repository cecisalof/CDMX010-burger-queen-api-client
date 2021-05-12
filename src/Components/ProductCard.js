import React, {Fragment} from 'react';
import './ProductCard.css'

const ProductCard = ({ product, products, cart, setCart }) => {
  // --para comprobar que traemos los items iterados
  // console.log('product:', product)
  const {name, price, _id, image} = product;

  // -- Función para agregar Items
  // // -- Función para aumentar cantidad de Items en el carrito
  const addProduct = (id) =>{
    const matchIdAdd = cart.find((product)=> product._id === id);
    if(matchIdAdd){
      setCart(cart.map((item)=> item._id === product._id ? {...matchIdAdd, qty: matchIdAdd.qty + 1 } : item))
    } else {
      setCart([...cart, { ...product, qty:1 }]);
    }
  }

  // -- Función para eliminar Items de 1 en 1 hasta eliminar la línea
  const removeProduct =(id) =>{
    const matchIdRemove = cart.find((product)=> product._id === id);
    // console.log(matchIdRemove)
    if(matchIdRemove.qty === 1){
      setCart(cart.filter((item)=> item._id !== product._id));
    } else {
      setCart(cart.map((item)=> item._id === product._id ? {...matchIdRemove, qty: matchIdRemove.qty - 1 } : item))
    }
  }

  return (
    <div>
      {product && (
        <Fragment>
          {products ? (
            <div id='product-content' onClick={() => addProduct(_id)}>
              <img src={image} id='product-photos'></img>
              <p id='name'>{name}</p>
              <p id='price'> ${price}</p>
              </div>
            ):(
            <div id='cart-count'>
            <div id='name'>{name}</div>
            <div id='price'>{product.qty} X ${price.toFixed(2)}</div>
            <button onClick={() => addProduct(_id)} className='add'>add</button>
            <button onClick={() => removeProduct(_id)} className='remove'>remove</button>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}
 
export default ProductCard
