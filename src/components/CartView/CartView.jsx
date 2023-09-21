// import React, { useContext, useEffect } from 'react'
import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './CartView.css'
import cart from '../../images/cart.png'
import carritoMas from '../../images/carritoMas.PNG'

const CartView = () => {

    const { carrito, precioTotal, vaciarCarrito, totalQuantity } = useContext(CartContext);


    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
      <div className="cnt-Compra">
        <div className="info-Compra" id="info-Compra">
          <h2>Carrito de compras</h2>
          <Link className="volverInicio2" to="/">
            Volver al Inicio
          </Link>
        </div>
        <div className="cnt-pelicula-lista">
          {
            carrito.length > 0 ?
                <div className="movies-Compra">                    
                    {carrito.map((movie) => (<CartItem movie={movie} key={movie.id} />))}
                </div>
                :
                <div className="movies-Compra2">                
                    <img src={cart} alt="cart" className='cart'/><h2>El carrito está vacío</h2>
                </div>
          }
        </div>
        <div className="totales">
          <button className="vaciar" onClick={handleVaciar} style={{ display : totalQuantity() > 0 ? 'block' : 'none'}}>
            Vaciar Carrito
          </button>
          <div className="total">
            <h2>Cantidad total: {totalQuantity()}</h2>
          </div>
          <div className="cantTotal">
            <h2>Precio total: $ {precioTotal()}</h2>
          </div>
          <Link to="/order" className='linkPedido'>
            <button className="pedido" style={{ display : totalQuantity() > 0 ? 'block' : 'none'}}><img src={carritoMas} alt='sumar al carrito' className='carritoMas'></img>Realizar Pedido</button >
          </Link>
        </div>
      </div>
    );
}

export default CartView
