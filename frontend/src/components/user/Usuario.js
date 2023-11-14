import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from './service/index';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


  const Usuarios = () => {
  const [key, setKey] = useState('username'); 
  const [usuarios, setUsuarios] = useState([]); 

  useEffect(() => {
    async function cargaUsuarios() {
      try {
        const response = await getUsers(); 

        if (response.status === 200) {
          setUsuarios(response.data.users); 
        }
      } catch (error) {
        console.error("Error al obtener los usuarios", error);
        
      }
    }

    cargaUsuarios();
  }, []);

  if (!usuarios.length) {
    return <div className='text-center'>Cargando contenido...</div>
  }

  const usuariosPorUsername = usuarios.reduce((acc, usuario) => {
    if (!acc[usuario.username]) {
      acc[usuario.username] = [];
    }
    acc[usuario.username].push(usuario);
    return acc;
  }, {});

  return (
    <Container className='backGround d-flex'>
      {Object.entries(usuariosPorUsername).map(([username, usuarios]) => (
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          key={username}
          className="mb-3 textoTab"
          justify
        >
          <Tab eventKey={username} title={username} className='mb-3'>
            {usuarios.map((usuario) => (
              <Container className='w-100'>
                
                <Card className="text-center m-3" key={usuario.idUser}>
                  <Card.Img variant="top" src={usuario.avatar} style={{ height: '10rem' }} />
                  <Card.Body>
                    <Card.Title className='m-2'>{`${usuario.name} ${usuario.lastname}`}</Card.Title>
                    <Card.Text>
                      {`Email: ${usuario.email}`}

                      
                    </Card.Text>
                  
                    <Button variant="primary" as={Link} to="/">Volver al Home</Button>

                  </Card.Body>
                  <Card.Footer className="text-muted">{username}</Card.Footer>
                </Card>
              </Container>
            ))}
          </Tab>
        </Tabs>
      ))}
    </Container>
  );
};
export default Usuarios