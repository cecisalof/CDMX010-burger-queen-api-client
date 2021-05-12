import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import './Orders.css'
import axios from 'axios';
import Cart from '../Components/Cart'
 
 
const userToken = JSON.parse(localStorage.getItem('access'));
 
const Orders = (props) => {
 const [products, setProducts]= useState() // estado de la lista de productos
 
 // estado del carrito
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
 
   // aquí agregar la referencia al sitio donde tomamos la data y referenciamos a las imagenes de la base de datos.
   // const src = "https://images.rappi.com.mx/products/6dc8f3ce-c25a-4e67-b0a4-61e551788107-1609950669835.jpeg?d=128x90&e=webp";
   // // aquí agregar la referencia al sitio donde tomamos la data y referenciamos a las imagenes de la base de datos.
   // const imgClassName = enabled ? "" : "disabled";
   return (
     <div className='order-container'>
       <div className='menu-container'>
       {/* con este operador validamos que el state no esté vacio  */}
       {products&& products.result.map(product =>
         <ProductCard
         product={product}
         setProducts={setProducts}
         key={product._id}
         cart={cart}
         setCart={setCart}
         products={products} />
       )}
       </div>
       <div className='cart-container'>
         <Cart
         cart={cart}
         setCart={setCart}/>
       </div>
     </div>
 
   );
}
export default Orders;

