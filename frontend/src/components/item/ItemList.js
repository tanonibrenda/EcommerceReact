// ItemList.js
import React from "react";
import productosData from "../../data/productosData.json";
import  Item  from "./Item";

export const ItemList = () => {
  return (
    <div className="items-list">
      {productosData.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          precio={product.precio}
          imagen={product.imagen}
          alt={product.alt}
        />
      ))}
    </div>
  );
};
