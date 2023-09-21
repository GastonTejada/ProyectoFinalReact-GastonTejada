import { useContext } from 'react';
import { CartContext } from "../../context/CartContext"
import trash from '../../images/trash2.png'

const CartItem = ( { movie, id }) =>{

    const { carrito, eliminarItem } = useContext(CartContext);

    const handleEliminar = () => {
        const index = carrito.findIndex(item => item.rank === movie.rank);
        eliminarItem(index);
    };

    return(
        <div>                                       
            <div className="img">                    
                <img src={movie.image} alt="pelicula" />
                <h3>{movie.title}</h3>              
                <button className='botonTrash' onClick={handleEliminar}>
                    <img src={trash} alt="eliminar" />
                </button>                                                
            </div >
            <div className='texto'>
                <p>Precio unitario: $ {movie.price}</p>
                <p>Cantidad: {movie.cantidad}</p>
                <p>Precio total: $ {movie.price * movie.cantidad}</p>
            </div>
        </div>    
    )
}

export default CartItem;