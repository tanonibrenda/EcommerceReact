// App.js

import React, { useEffect } from 'react';
import NavBar from '../components/menu/NavBar';
import Home from '../components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import LoginForm from './login/LoginForm';
import Nosotros from './nosotros/Nosotros';
import SearchPage from '../components/menu/SearchPage';
import Footer from '../components/pie/footer';
import { ShoppingCart } from '../components/carrito/ShoppingCart';
import  Productos  from '../components/productos/Productos';
import ProductPage from '../components/productos/ProductPage';
import Contacto from './contacto/Contacto';

import Usuarios from '../components/user/Usuario'; 

import  CrearUsuario from '../components/Admin/cruds/usuarios/crearUsuario'

import Admin from '../components/Admin/services/admin';



import Consejos from '../components/consejos/Consejos';
import Limpieza from '../components/consejos/Limpieza';

// import CarouselWithProducts from "../components/item/CarouselWithProducts";

import './App.css';


function App() {

  //me saltava error en algunos tipos de navegadores
  useEffect(() => {
    // Aplicar estilos al elemento body
    document.body.style.webkitTextSizeAdjust = '100%';
    document.body.style.textSizeAdjust = '100%';

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.webkitTextSizeAdjust = null;
      document.body.style.textSizeAdjust = null;
    };
  }, []);


  return (
    <PayPalScriptProvider options={{ "client-id": "AVDPvxMX5gciG4p0kvPGjQgTIwoWV0Yh_tunN32ij8AF3S2JDPylUf7gfRXVD1sOpCluNmUn4lqG2Ryi" }}>
      <ShoppingCartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductPage />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/usuarios" component={Usuarios} />
            
            
            <Route path='/admin/crearUsuario' element={<CrearUsuario />} />
            
            <Route path='/admin/*' element={<Admin />} />

            <Route path="/consejos" element={<Consejos />} />
            <Route path="/limpieza" element={<Limpieza />} />
          </Routes>
          <Footer />
        </Router>
      </ShoppingCartProvider>
    </PayPalScriptProvider>
  );
}

export default App;
