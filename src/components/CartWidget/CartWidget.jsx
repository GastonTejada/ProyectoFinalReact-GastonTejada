import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import carrito from '../../images/carrito.png'
import './CartWidget.css'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <div>
            <Link className="cartWidget" to="/cartview" style={{ display : totalQuantity() > 0 ? 'flex' : 'none'}}>            
                <img src={carrito} alt='carrito de compras'/>                
                <p className="numerito">{totalQuantity()}</p>
            </Link>            
        </div>
    );

}

export default CartWidget;