import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recetas = () => {
  const [recipe, setRecipe] = useState();

  // Función para obtener una receta aleatoria
  const getRandomRecipe = async () => {
    try {
      // API key
      const apiKey = '758ebe2bf6474fc09f71f52446344385';

      // Haciendo una llamada a la API de Spoonacular para obtener una receta aleatoria
      const resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
      console.log(21, resp.data);

      // Almacenar la receta aleatoria en la variable 'recipe'
      setRecipe(resp.data.recipes[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Cargar una receta aleatoria al montar el componente
  useEffect(() => {
    getRandomRecipe();
  }, []);

  return (
    <div className="container text-center">
      <h1 className="my-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
        La Receta Imperible de la Semana
      </h1>
      <img src="./images/tips/chef01.png" className="img-fluid mb-4" alt="Chef" />
      <h2>Risotto al Limón</h2>
      <h3>Historia</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias itaque quisquam, obcaecati eaque aliquam
        excepturi quae cupiditate error aspernatur expedita! Pariatur quod cum amet? Laboriosam odit quia et commodi eum.
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quisquam, ipsum aut adipisci quasi porro. Harum
        possimus iure delectus soluta. Optio consequatur a rem architecto culpa! Ipsa, quisquam! Quibusdam, distinctio.
      </p>
      <div className="container">
        <div className="row">
          <button onClick={getRandomRecipe} type="button" class="btn btn-primary">Más Recetas</button>
        </div>
        {recipe && (
          <div>
            <p>
              Name:
              <a target="_blank" rel="noopener noreferrer" href={recipe.sourceUrl}>
                {recipe.title}
              </a>
            </p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Recetas;
