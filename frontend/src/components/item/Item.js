// Item.js
import React, { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";

const Item = ({ id, nombre, precio, imagen, alt }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { id, quantity: 1, precio }];
      }
    });
  };

  const removeItem = () => {
    setCart((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (foundItem && foundItem.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const quantityPerItem = cart.find((item) => item.id === id)?.quantity || 0;

  return (
    <div className="item-box">
      <h3>{nombre}</h3>
      <p>Precio: {precio}</p>
      <img src={imagen} alt={alt} />

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={addToCart}>
          Comprar
        </button>
      ) : (
        <button className="item-plus-button" onClick={addToCart}>
          Agregar Otro
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={removeItem}>
          Quitar el Producto
        </button>
      )}
    </div>
  );
};

export default Item;
