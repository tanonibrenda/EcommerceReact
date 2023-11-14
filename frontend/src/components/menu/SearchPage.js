import React, { useState, useContext } from 'react';  // Agrega 'useContext'
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
  
    // Aquí puedes implementar la lógica para realizar la compra
    console.log(`Compraste ${producto.nombre}`);
  }

  // Agrega una función para manejar la acción de agregar otro
  function handleAgregarOtro(producto) {
    // Aquí puedes implementar la lógica para agregar otro producto al carrito
    console.log(`Agregaste otro ${producto.nombre} al carrito`);
  }

  // Agrega una función para manejar la acción de quitar
  function handleQuitar(producto) {
    // Aquí puedes implementar la lógica para quitar un producto del carrito
    console.log(`Quitaste ${producto.nombre} del carrito`);
  }

  // Puedes usar la información del carrito aquí si es necesario
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

