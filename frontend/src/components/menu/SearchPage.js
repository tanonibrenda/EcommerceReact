import React, { useState, useContext } from 'react';  
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext'

function SearchPage() {
  const location = useLocation();
  const { searchResults, searchTerm } = location.state || {};

  
  // Obtén setCart del contexto
  const [cart, setCart] = useContext(CartContext);

  // Estado para rastrear los productos comprados
  const [productosComprados, setProductosComprados] = useState([]);

  // Agrega una función para manejar la acción de compra
  function handleCompra(producto) {
    // Agrega el producto al estado de productos comprados
    setProductosComprados((prevProductos) => [...prevProductos, producto]);
  
    // Actualiza el carrito utilizando setCart del contexto
    setCart((prevCart) => [
      ...prevCart,
      { id: producto.id, nombre: producto.nombre, precio: producto.precio, quantity: 1 },
    ]);
  
    
    console.log(`Compraste ${producto.nombre}`);
  }

  
  function handleAgregarOtro(producto) {
    
    console.log(`Agregaste otro ${producto.nombre} al carrito`);
  }

  
  function handleQuitar(producto) {
   
    console.log(`Quitaste ${producto.nombre} del carrito`);
  }

 
  console.log('Carrito:', cart);

  return (
    <div>
      <h2>Resultados de la búsqueda {searchTerm}</h2>
      <table className="table table-bordered" style={{ width: '90%', marginLeft: '5%'  }}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result) => (
            <tr key={result.id}>
              <td>
                <img src={result.imagen} alt={result.alt} style={{ maxWidth: '100px' }} />
              </td>
              <td>{result.nombre}</td>
              <td>{result.precio}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleCompra(result)}>
                  Comprar
                </button>
                {productosComprados.includes(result) && (
                  <>
                    <button className="btn btn-success" onClick={() => handleAgregarOtro(result)}>
                      Agregar Otro
                    </button>
                    <button className="btn btn-danger" onClick={() => handleQuitar(result)}>
                      Quitar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchPage;

