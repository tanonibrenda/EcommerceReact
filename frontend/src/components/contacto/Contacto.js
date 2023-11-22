import React, { useState } from "react";

function Contacto() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleEnviarClick = () => {
   
    console.log("Email:", email);
    console.log("Teléfono:", phone);
    console.log("Mensaje:", message);
  };

  return (
    <div>
      <form action="https://formsubmit.co/brendayohenatanoni@gmail.com" method="POST">  
      <div
        className="contacto"
        style={{
          backgroundColor: "rgb(181, 180, 180)",
          marginBottom: "5px",
          padding: "2rem",
        }}
      >
        <div className="mb-3">
          <h1>Contacto</h1>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            E-mail
          </label>
          <input
            name="name"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Teléfono
          </label>
          <input
            name="phone"
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Mensaje
          </label>
          <textarea
           
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button className="btn btn-lg btn-dark btn-block" onClick={handleEnviarClick}>
          Enviar
        </button>
      </div>
      </form>
    </div>
  );
}


// api: https://formsubmit.co/
export default Contacto;
