// Footer.js
import React from 'react';
import './footer.css'
// import Contacto from '../contacto/Contacto'
import {  Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
     {/* style={{ backgroundColor: 'rbg(113, 171, 214)', color: 'black' }}> */}
      <section className="alPie">
        <div className="alPieContainer" style={{ width: '90%', marginLeft: '5%' }}>
          <div className="tituloFooter">
            <h2 className="text-center">RECIBE NUESTRAS OFERTAS Y DESCUENTOS</h2>
          </div>
          <div className="inputFooter d-flex justify-content-center align-items-center mb-5">
          <form target="_blank" action="https://formsubmit.co/brendayohenatanoni@gmail.com" method="POST">
            <input
              type="email"
              name='email'
              className="px-3 text-center"
              placeholder="Ingresa tu e-mail"
            />
            
            <button className="btn3">Suscríbete</button>
            </form>
          </div>

          <div className="columnasFooter">
            <div className="col-lg-11">
                <div className="row">

                <div className="col-lg-3">
                                <h5 className="pb-3">NUESTRA TIENDA</h5>
                                <div className='pb-5'>
                                <Nav.Link href="/productos" variant="link" className='pb-3'>Productos</Nav.Link>
                                <Nav.Link href="/nosotros" variant="link" className='pb-3'>Nosotros</Nav.Link>
                                <Nav.Link href="/login" variant="link" className='pb-3'>Registrate</Nav.Link>
                                </div>
                                                           
        
                            </div>

                            <div className="col-lg-3 ml-2">
                                <h5 className="pb-3">ATENCION AL CLIENTE</h5>
                                <p>Horarios</p>
                                <p>Sucursales</p>
                                <Nav.Link href="/contacto" variant="link">Contacto</Nav.Link>
                                {/* <p><a href='/contacto'>Contacto</a></p> */}
        
                            </div>
                            
                            <div className="col-lg-3">
                                <h5 className="pb-3">NOVEDADES</h5>
                                <p>Ofertas</p>
                                <p><Link to="/consejos"  style={{ textDecoration: 'none', color: 'inherit' }}>Consejos</Link></p>
                                {/* <p>No nos importa</p> */}
        
                            </div>
                            <div className="col-lg-3">
                                <h5 className="pb-3">REDES SOCIALES</h5>
                                <p><i className="fab fa-facebook" style={{margin: '2px'}}><a href='https://www.facebook.com/'>
                                <img src='../images/logos/icons8-facebook-16.png' alt='facebook'></img></a>
                                </i></p>
                                <p><i className="fab fa-instagram" style={{margin: '2px'}}><a href="https://www.instagram.com/">
                                <img src='../images/logos/icons8-instagram-16.png' alt='instagram'></img></a>  </i></p>
                                <p><i className="fab fa-twitter" style={{margin: '2px'}}><a href='https://github.com/tanonibrenda/tp.git'>
                                <img src='../images/logos/icons8-github-16.png' alt='github'></img></a>
                                  </i></p>
        
                            </div>
                        </div>
                    

                
              </div>
            </div>
          </div>
          <div className='container' style={{ display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          <h6 >Copyright 2023©</h6>
          </div>
        
      </section>
    </footer>
  );
}

export default Footer;
