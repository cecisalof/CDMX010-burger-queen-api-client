import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios';

import ProductCard from '../Components/ProductCard'
import Cart from '../Components/Cart';

const userToken = JSON.parse(localStorage.getItem('access'));
 
const Orders = (props) => {
  const [products, setProducts]=useState()
  const [cart, setCart] = useState([]);

  // -- petición a la api al endpoint Products
  const getDataProducts = () => {
    return axios.get('http://localhost:8080/products/', {
      headers: { Authorization: `Bearer ${userToken.token}` },
    }).then((response) => {
      const itemsData = response.data;
      console.log('itemsData', itemsData)
      if (itemsData){
        setProducts(itemsData)
      }
    }).catch((error) => {
      console.log(error);
    })
  };

  // --ciclo de vida del componente ?
  useEffect(()=>{
    getDataProducts()
  },[])

  return (
    <>
      <div className='order-container'>
        <div className='menu-container'>
        {/* con este operador validamos que el state no esté vacio  */}
          {products&& products.result.map(product =>
            <ProductCard
            key={product._id}
            product={product}
            products= {products}
            setProducts={setProducts}
            cart={cart}
            setCart={setCart}
            />
          )}
        </div>
        <div className='cart-container'>
        {/* pasar al estado al componente Cart*/}
          <Cart
          cart={cart}
          setCart={setCart}/>
        </div>
      </div>
    </>
  );
}
export default Orders;

