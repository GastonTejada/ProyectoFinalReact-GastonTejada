import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {

  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading]   = useState(true);
  const id = useParams().id;

  useEffect(() => {

      const docRef = doc(db, "moviesList", id);

      getDoc(docRef)
        .then((resp) => {
          setPelicula({ ...resp.data(), id: resp.id });
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo más tarde.',
          });          
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);

  return (
    <div>
      {loading ? <Loader/>  : pelicula && <ItemDetail pelicula={pelicula} />}      
    </div>
    
  )
  
}

export default ItemDetailContainer;

