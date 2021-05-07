import React from 'react';
import './product-row.style.css'
import mujer from './mujer.png';
import hombre from './hombre.png';


const ProductRow = (props) => {
    return (
        <div className = {"product-row-container "+props.color}>
            <span className="">{props.name}</span>
            {
               props.grade < 3
               ?
               <span className="color-red">{' '}{props.grade}</span>
               :
               <span>{' '}{props.grade}</span>
            }
            {
                props.gender === "Female"
                ?
                <span><img src={mujer} alt="icono-mujer"></img></span>
                :
                <img src={hombre} alt="icono-hombre"></img>
            }
        </div>
        
       // <SearchBar/>
    );
}

export default ProductRow ;