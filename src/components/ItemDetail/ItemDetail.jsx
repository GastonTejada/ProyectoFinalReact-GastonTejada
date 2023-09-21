import React, { useState , useContext } from 'react'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css'

const ItemDetail = ( {pelicula} ) => {

  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      setCantidad(cantidad + 1)
  }


  return (
    <div className="cnt-pelicula-deta">
      <div className='pelicula-deta'>
        <img src={pelicula.image} alt={pelicula.title}/>          
        <div className="pelicula-descrip">            
            <h1>{pelicula.title}</h1>
            <p>Genero: {pelicula.genre}</p>
            <p>Descripcion: {pelicula.description}</p>                                        
            <p>Año: {pelicula.year}</p>                                        
            <p>Director: {pelicula.director}</p>                                
            <p>Escritores: {pelicula.writers}</p>
            <div className='precioStock'>
              <p>Precio: {pelicula.price} pesos</p>
              <p>Stock: {pelicula.stock}</p>
            </div>                                            
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={() => { agregarAlCarrito(pelicula, cantidad) }}
            />            
        </div>                
        <div className="volverInicio">
          <Link className="volverInicio" to="/">Volver al Inicio</Link>
        </div>
      </div>
      
    </div>
  )
}

export default ItemDetail;