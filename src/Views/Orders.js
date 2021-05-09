import ReactDOM from 'react-dom';
import React, {useEffect, useState, Reac} from "react"
import './Orders.css';

const ProductCards = props => {
    const [enabled, setEnabled]= useState(true);
    // aquí agregar la referencia al sitio donde tomamos la data y referenciamos a las imagenes de la base de datos. 
    const src = "https://images.rappi.com.mx/products/6dc8f3ce-c25a-4e67-b0a4-61e551788107-1609950669835.jpeg?d=128x90&e=webp";
    // aquí agregar la referencia al sitio donde tomamos la data y referenciamos a las imagenes de la base de datos. 
    const containerClassName = enabled ? "" : "disabled";

    return(
        <div 
        onClick= {() => setEnabled(!enabled)}
                className={containerClassName}
        >
            <picture id="product-content" className="products">
                <img id= "product-photos" 
                onClick= {() => setEnabled(!enabled)}
                className={containerClassName}
                src={src} 
                />
                {/* cuando esté consumida la API cambiar por ${props.name} / ${props.price} / {props.img}*/}
                <p id="name"> Hamburguesa</p> 
                <p id="price"> $ : </p>
            </picture>
        </div>
    )    
}

export default ProductCards;

// ReactDOM.render(
//     <div>
//         <ProductCards/>
//     </div>,
    
    
    
// )

