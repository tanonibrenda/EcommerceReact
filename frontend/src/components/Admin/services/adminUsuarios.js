import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { getUsuarios, findUsuario, saveUsuario, ActUsuario, BorrarUsuarios } from '../services';  // Importo todas las funciones necesarias
import CrearUsuario from '../cruds/usuarios/crearUsuario.js';

const AdmUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function cargarUsuarios() {
      try {
        const response = await getUsuarios();
        setUsuarios(response);
      } catch (error) {
        console.error('Error en la solicitud:', error.message);
      }
    }

    cargarUsuarios();
  }, []);

  return (
    <>
      <Container>
        <CrearUsuario saveUsuario={saveUsuario} />
        {/* ^^^ Pasando la función saveUsuario como prop */}
        <ActUsuario findUsuario={findUsuario} ActUsuario={ActUsuario} />
        {/* ^^^ Pasando las funciones findUsuario y ActUsuario como props */}
        <BorrarUsuarios BorrarUsuarios={BorrarUsuarios} />
        {/* ^^^ Pasando la función BorrarUsuarios como prop */}
      </Container>

      <Container>
        {usuarios.map(({ _id, username, name, lastname, password, email, direccion, barrio, municipio, provincia, telefono }) => (
          <ListGroup key={_id}>
            <ListGroup.Item>
              <div>
                <div>Tus Datos</div>
                <h3>{username}</h3>
                <h4>{name}</h4>
                <h4>{lastname}</h4>
                <h4>{email}</h4>
                <h4>{direccion}</h4>
                <h4>{barrio}</h4>
                <h4>{municipio}</h4>
                <h4>{provincia}</h4>
                <h4>{telefono}</h4>
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </>
  );
};

export default AdmUsuarios;
