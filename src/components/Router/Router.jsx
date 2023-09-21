import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../../context/CartContext";
import CartView from "../CartView/CartView";
import Order from "../Order/Order";

const Router = () => {
    return(
            
        <CartProvider>
            <BrowserRouter>
            
                <Navbar />
                <Routes>                
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/peliculas/:genero" element={<ItemListContainer />} />
                    <Route path="/pelicula/:id" element={<ItemDetailContainer />}/>
                    <Route path="/cartview" element={<CartView />}/>
                    <Route path="/order" element={<Order />}/>
                </Routes>
            
            </BrowserRouter>            
        </CartProvider>
                
    )

}

export default Router;