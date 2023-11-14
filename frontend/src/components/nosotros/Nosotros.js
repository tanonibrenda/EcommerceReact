import React from "react";
import './nosotros.css';

function Nosotros() {
  return (
    <div className="container-fluid mb-40">
      <div className="container text-center">
        <h1 className="my-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Nuestra Historia</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, animi amet. Laborum nisi natus veniam voluptatum asperiores voluptatibus dolorum illo! Blanditiis, atque. Mollitia sit, dolorum ut sed corrupti magni fugiat nulla incidunt deserunt corporis veritatis!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere perferendis ullam quisquam ratione dignissimos ducimus deleniti corporis odio? Illo nemo veritatis cum ex explicabo?</p>
      <div className="container">
      <img src=".//images/tips/bisabuelo 03.jpg" alt="foto del bisabuelo Evaristo Tanoni" className="img-fluid"
    style={{ maxWidth: '250px' }}></img>
      </div>

        <h1 className="my-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Nuestra Meta</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam provident distinctio eius mollitia dicta aspernatur adipisci similique quo totam, cumque suscipit dolore autem hic aperiam vitae labore minus in natus, culpa a, architecto voluptate? Repellendus voluptatem et facere, dicta iste corporis eaque?</p>
        <div className="container">
      <img src=".//images/tips/familia02.png" alt="foto de una familia feliz" className="img-fluid"
    style={{ maxWidth: '250px' }}></img>
      </div>

        <h1 className="my-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Nuestro Compromiso</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam provident distinctio eius mollitia dicta aspernatur adipisci similique quo totam, cumque suscipit dolore autem hic aperiam vitae labore minus in natus, culpa a, architecto voluptate? Repellendus voluptatem et facere, dicta iste corporis eaque?</p>
        <div className="container">
      <img src=".//images/tips/compromiso.png" alt="foto de uan joven haciendo una promesa" className="img-fluid"
    style={{ maxWidth: '250px', marginBottom: '50px' }}></img>
      </div>
      </div>
    </div>
  );
}

export default Nosotros;
