import React from "react";
import { render } from "react-dom";

export const ButtonForm = () => {
    return(
        <button onClick={() => { 
            alert('pulsado') 
        }}>
            ingresar
        </button>
    ); 
}
