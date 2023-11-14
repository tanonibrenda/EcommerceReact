// CarouselWithProducts.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import productosData from '../../data/productosData.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CarouselWithProducts = () => {
  const navigate = useNavigate();

  const handleClick = (selectedProduct) => {
    console.log('Producto seleccionado:', selectedProduct);
    navigate(`/product/${selectedProduct.id}`, { state: selectedProduct });
  };

  return (
    <Carousel>
      {productosData.map((producto) => (
        <Carousel.Item key={producto.id} interval={1500}>
          <Card>
            <Card.Img
              src={producto.imagen}
              alt={producto.alt}
              className="d-block w-100"
              style={{ maxWidth: '400px', margin: 'auto' }}
            />
             <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>{producto.categoria}</Card.Text>
              <Card.Text>Precio: {producto.precio}</Card.Text>
              <Button variant="primary" onClick={() => handleClick(`/producto/${producto.id}`, { state: producto })}>Ver Detalles</Button>
            </Card.Body>
            </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselWithProducts;


