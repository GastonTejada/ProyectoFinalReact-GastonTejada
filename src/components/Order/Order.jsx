import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import './Order.css'
import Loader2 from '../Loader/Loader2'
import final from '../../images/final.PNG'
import carritoLleno from '../../images/carritoLleno.PNG'
import home from '../../images/home.PNG'
import Confetti from 'react-confetti';


const Order = () => {
    
    const [orderId, setOrderId] = useState("");

    const [process, setProcess] = useState(false);        

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = (data) => {
        const order = {
            buyer: data,
            items: carrito,
            total: precioTotal()
        }
        
        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                vaciarCarrito();
            })

    }

        
    useEffect(() => {
        setProcess(true)
        setTimeout(()=>{
            setProcess(false)
        },5000 )
    }, [orderId])         

    if (orderId) {
   
        return (

            <div className='cnt-principal'>
                {process ? <Loader2 />
                :                
                <div className="cont-final">
                    <Confetti />
                    <h1 className="title">Final de compra</h1>
                    <img src={final} alt="terminator" className="img_final"/>                    
                    <h3>¡Tu orden ha sido confirmada!</h3>
                    <h4>Recibirás un mail con el detalle de tu compra.</h4>
                    <h5>Tu número de orden es: {orderId}</h5>                    
                    <Link to="/" className='volver'>
                        <button className="finalCompra" ><img src={home} alt='home' className='home'></img>Volver al inicio</button >
                    </Link>      
                </div>                        
                }
            </div>                    
        )
    }

    return (
        <div className="cnt-principal">
            <div className="cont-order">
                <Link className="volverInicio2" to="/">
                    Volver al Inicio
                </Link>
                <h1 className="title">Finalizar compra</h1>
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div class="inputbox">
                        <input required type="text" {...register("nombre")} />
                        <span>Nombre</span>
                        <i></i>
                    </div>
                    {errors.nombre && <p className="error-message">Este campo es obligatorio</p>}
                    <div class="inputbox">
                        <input required type="email" {...register("email")} />
                        <span>Email</span>
                        <i></i>
                    </div>
                    {errors.email && <p className="error-message">Este campo es obligatorio</p>}
                    <div class="inputbox">
                        <input required type="phone" {...register("telefono")} />
                        <span>Telefono</span>
                        <i></i>
                    </div>
                    {errors.telefono && <p className="error-message">Este campo es obligatorio</p>}
                    <div class="inputbox">
                        <input required type="text" {...register("direccion")} />
                        <span>Dirección</span>
                        <i></i>
                    </div>
                    {errors.direccion && <p className="error-message">Este campo es obligatorio</p>}
                    <div class="inputbox">
                        <input required type="text" {...register("ciudad")} />
                        <span>Ciudad</span>
                        <i></i>
                    </div>
                    {errors.ciudad && <p className="error-message">Este campo es obligatorio</p>}
                    <div>
                        <button className="finalCompra" type="submit"><img src={carritoLleno} alt='carrito' className='carritoLleno'></img> Finalizar Compra</button>
                    </div>   

                </form>
            </div>
        </div>        
  )
}

export default Order