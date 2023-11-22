import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const productDetails = location.state;

  // Verificar si productDetails existe antes de desestructurarlo
  if (!productDetails) {
    return <div>Datos no facilitados por el fabricante</div>;
  }

  const { nombre, categoria, precio, imagen, alt } = productDetails;

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: {precio}</p>
      <img src={imagen} alt={alt} />
    </div>
  );
};

export default ProductPage;



