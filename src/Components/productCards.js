import React from 'react'
import './ProductCards.css'

// eslint-disable-next-line react/prop-types
const ProductCards = () => {
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
};

export default ProductCards;
