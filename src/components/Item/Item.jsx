import { Link } from "react-router-dom";

const Item = ( {pelicula} ) =>{
    return(
        <div className="cnt-pelicula">
            <img src={pelicula.image} alt={pelicula.title}/>
            <br />
            <br />
            <div>                
                <h4>{pelicula.title}</h4>                
                <div>
                    <p>Genero: {pelicula.genre}</p>                                        
                    <p>Precio: {pelicula.price} pesos</p>                               
                </div>
                <div>
                    <Link className="btnVer" to={`/pelicula/${pelicula.id}`}>Ver más</Link>
                </div>
            </div>        
        </div>
    )
}

export default Item;


