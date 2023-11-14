import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';
import indexApi from '../../api/indexApi';
// import Admin from '../Admin/services/admin'


const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [cart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const data = await indexApi.searchProducts(searchTerm);

      // Navegar a la página de búsqueda con los resultados
      navigate('/search', { state: { searchResults: data } });
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  const handleButtonClick = () => {
    // Simula el evento para mantener la misma lógica
    handleSearch({ preventDefault: () => {} });
  };

  return (
    <Container>
      <Navbar expand="lg">
        <Link to="/" className="navbar-brand position start ms-1 pl-1 img-fluid">
          <img src="../images/logos/logo.png" alt="logo de la empresa" id="logo" style={{ maxWidth: '75%' }} />
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${expanded ? 'show' : ''}`}>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/productos" className="custom-link">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="custom-link">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/consejos" className="custom-link">
              Consejos
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="custom-link">
              Registrarse
            </Nav.Link>
            
            
            <Nav.Link as={Link} to="/admin/crearUsuario">Crear Usuario</Nav.Link>
            
            <Nav.Link as={Link} to="/admin">Usuarios</Nav.Link>
            

            <Nav.Link as={Link} to="/contacto" className="custom-link">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="custom-link">
              Carrito
              <span className="cart-count ml-2">{quantity}</span>
            </Nav.Link>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="px-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ borderRadius: '20px', marginLeft: '4px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn0"
                type="submit"  
                onClick={handleButtonClick}
                style={{ borderRadius: '60px', marginRight: '-35px' }}
              >
                Buscar
              </button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
