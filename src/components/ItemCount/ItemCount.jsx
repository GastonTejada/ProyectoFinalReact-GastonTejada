import './ItemCount.css'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

    
  return (
    <div>
        <div className="item-count">
            <p>Cantidad</p>
            <button className="sumaResta" onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className="sumaResta"onClick={handleSumar}>+</button>
            <button className="agregarCarrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>        
    </div>
  )
}

export default ItemCount