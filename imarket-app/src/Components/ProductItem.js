import React from "react";


function ProductItem (props) {
    return (
        <div className="productItem">
        <img className="item" src={props.url} alt={props.name}/>
        <p className="itemName">{props.name}</p>
        <p className="itemLocation">{props.location}</p>
        <p className="itemPrice">{props.price}</p>
        </div>
    )
}

export default ProductItem;