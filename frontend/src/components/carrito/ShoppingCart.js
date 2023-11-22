import React, { useContext, useState } from "react";
import { CartContext } from "../../context/ShoppingCartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import './ShoppingCart.css'

export const ShoppingCart = () => {
  // Acceso directo al estado del carrito
  const [cart, setCart] = useContext(CartContext);

  // Estado para controlar la visualización de los productos comprados
  const [showProducts, setShowProducts] = useState(false);

  // Calcular la cantidad total en el carrito
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  // Calcular el precio total multiplicando la cantidad por el precio de cada producto
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.precio;
  }, 0);

  // Usa la variable de entorno REACT_APP_PAYPAL_CLIENT_ID
  const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  return (
  <div className="container">
  <div className="row">
    <div className="col-lg-10 offset-lg-1">
      <div className="cart-container">
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
             <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="/productos" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>Continua Comprando
                        </a>
                      </h5>
                      <hr />
                      <div>
                        <h3 className="w-100 mb-4" id="tituloCarrito">
                          Carrito de Compras 🛒
                        </h3>
                        <h4>Productos en el Carrito: {quantity}</h4>
                      </div>
                      <div>
                        <h4 className="mb-0">Total: {totalPrice}</h4>
                      </div>
                      <button
                        onClick={() => setShowProducts(!showProducts)}
                        className="btn btn-primary"
                      >
                        {showProducts ? "Ocultar Productos Comprados" : "Ver Productos Comprados"}
                      </button>
                    </div>
                    <div className="col-lg-5">
                      <div className="card mb-3">
                        <div className="card-body">
                          {showProducts && (
                            <div>
                              <h2>Productos Comprados:</h2>
                              <ul>
                                {cart.map((item) => (
                                  <li key={item.id} className="ms-3">
                                    {item.nombre} - Cantidad: {item.quantity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Pago de Compra</h5>
                          </div>
                          <p className="small mb-2">Tipo de Pago</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x"></i>
                          </a>
                        </div>
                      </div>
                      {/* Agregar el componente de botón de pago de PayPal */}
                      <PayPalButtons
  createOrder={(data, actions) => {
    console.log("Creating order:", data);
    // Lógica para crear la orden de PayPal
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: totalPrice,
          },
        },
      ],
      application_context: {
        brand_name: 'cosas', 
        user_action: 'PAY_NOW',
        shipping_preference: 'NO_SHIPPING',
      },
      payer: {
        payer_id: 'usuario_de_prueba_id', // ID del usuario de prueba de PayPal
        email_address: 'usuario_de_prueba@dominio.com', // Correo electrónico del usuario de prueba de PayPal
      },
      payee: {
        email_address: 'mailVendedorPrueba@mail.com', 
      },
    });
  }}
  onApprove={(data, actions) => {
    console.log("Order approved:", data);
    // Lógica para aprobar la transacción después de que el usuario pague
    return actions.order.capture().then(function (details) {
      // Manejar la captura exitosa aquí
      console.log('Pago capturado: ', details);
      // Actualizar el estado de la aplicación, por ejemplo, limpiar el carrito
      setCart([]);
    });
  }}
  onError={(error) => {
    console.error("Error en PayPalButtons:", error);
    // Lógica para manejar errores de PayPal
  }}
  options={{
    clientId: paypalClientId, 
  }}
/>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  </div>
  </div>
  );
};
