import React from "react";
import { Link } from "react-router-dom";
import productosData from "../../data/productosData.json";
import Item from "../item/Item";
import Card from 'react-bootstrap/Card';
import './Productos.css';

const Productos = () => {
  return (
    <div className="items-list">
      {productosData.map((product) => (
        <Link
          to={{
            pathname: `/producto/${product.id}`,
            state: product, 
          }}
          key={product.id}
          style={{ textDecoration: 'none' }}
        >
          <Card
            style={{ margin: '5px', cursor: 'pointer' }}
            className="shadow"
          >
            <Item {...product} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Productos;
