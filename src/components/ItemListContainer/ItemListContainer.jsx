import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { collection,getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {

    const [peliculas,setPeliculas]=useState([]);    
    const [loading, setLoading] = useState(true);    
    const genero = useParams().genero;
    
    useEffect(() => {
      const moviesRef = collection(db, "moviesList")
      const q = genero ? query(moviesRef, where("genre", "==", genero)) : moviesRef;

      setLoading(true)
      setTimeout(()=>{
        getDocs(q)
        .then((resp) => {

          setPeliculas(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
          setLoading(false)
        },1500 )
      
    }, [genero])
    
    return (
        <div className='ItemListContainer'>
            {loading ? <Loader/>  : <ItemList peliculas={peliculas}/>}
        </div>
    );

}

export default ItemListContainer;