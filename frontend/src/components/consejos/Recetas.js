import React from "react";

const Recetas = () => {
  return (
    <div className="container text-center">
      <h1 className="my-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
        La Receta Imperible de la Semana
      </h1>
      <img
        src="./images/tips/chef01.png"
        className="img-fluid mb-4"
        alt="Chef"
      />
      <h2>Risotto al Limón</h2>
      <h3>Historia</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        itaque quisquam, obcaecati eaque aliquam excepturi quae cupiditate error
        aspernatur expedita! Pariatur quod cum amet? Laboriosam odit quia et
        commodi eum.
      </p>
      <h3>Ingredientes</h3>
      <ul className="list-unstyled">
        <li>Arroz</li>
        <li>caldo de pollo</li>
        <li>4 limones</li>
        <li>aceite</li>
        <li>sal</li>
      </ul>
      <h3>Procedimiento</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quisquam,
        ipsum aut adipisci quasi porro. Harum possimus iure delectus soluta.
        Optio consequatur a rem architecto culpa! Ipsa, quisquam! Quibusdam,
        distinctio.
      </p>
    </div>
  );
};
export default Recetas;
