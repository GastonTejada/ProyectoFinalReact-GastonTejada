import Item from '../Item/Item';

const ItemList = ( {peliculas} ) => {
  return (    
    <div className='peliculas'>
      { peliculas.map((pelis) => <Item pelicula={pelis} key={pelis.id}/>)}
    </div>          
  )
}

export default ItemList;
