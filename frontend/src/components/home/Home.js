import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselWithProducts from '../../components/item/CarouselWithProducts';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card text-bg-dark">
        <img
          src="/images/logos/cocina.jpg"
          className="card-img"
          alt="fondo con imagen de una cocina con unas tablas de madera"
        />
        <div className="card-img-overlay">
          <div className="card-titlePersonal1">
            <h2
              className="m-3 pb-5 pt-5 text-center color: black"
              style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}
            >
              Lo Mejor Para tu Hogar
            </h2>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <p className="card-text">
          <button
            className="btn btn1 mt-3 position-relative btn-rounded mt-3"
            style={{ backgroundColor: 'red' }}
            onClick={() => navigate('/productos')}
          >
            Nuestros Productos
          </button>
        </p>
      </div>

      <div style={{ marginTop: '70px', marginBottom: '70px' }}>
        <div className="container text-center">
          <h2 className="my-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
            NUESTROS PRODUCTOS
          </h2>
        </div>
       
        <CarouselWithProducts />
      </div>
    </div>
  );
};

export default Home;
