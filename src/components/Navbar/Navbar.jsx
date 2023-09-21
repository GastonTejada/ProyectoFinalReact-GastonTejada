import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    
    const ItemClick = (item) => {
        setSelectedItem(item);
      };

    return (            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">                                
                <Link to="/" className={`logo ${selectedItem === ''}`} onClick={() => ItemClick('logo')}><img src={logo} alt='logo'/><h1>PopCorn Time</h1></Link>
                <div className="subtitulo">
                    <h6>Movies Store</h6>
                </div>
                <div className="container-fluid">                                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">                            
                            <li className="nav-item">
                                <Link className={`navlink ${selectedItem === 'item1' ? 'selected' : ''}`} to="/peliculas/Action" onClick={() => ItemClick('item1')}>Acción</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`navlink ${selectedItem === 'item2' ? 'selected' : ''}`} to="/peliculas/Drama" onClick={() => ItemClick('item2')}>Drama</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className={`navlink ${selectedItem === 'item3' ? 'selected' : ''}`} to="/peliculas/Crime" onClick={() => ItemClick('item3')}>Crimen</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className={`navlink ${selectedItem === 'item4' ? 'selected' : ''}`} to="/peliculas/Animation" onClick={() => ItemClick('item4')}>Animación</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className={`navlink ${selectedItem === 'item5' ? 'selected' : ''}`} to="/peliculas/Comedy" onClick={() => ItemClick('item5')}>Comedia</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>            
    )
};

export default Navbar;

<Navbar />;