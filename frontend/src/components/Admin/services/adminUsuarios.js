import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
// import { getUsers } from './index.js';
import { getUsuarios, findUsuario } from '../services';
import CrearUsuario from '../cruds/usuarios/crearUsuario.js';
import ActUsuario from '../cruds/usuarios/actUsuario.js';
import BorrarUsuarios from '../cruds/usuarios/borrarUsuario.js';



const AdmUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function cargaUsuarios() {
      try {
        const response = await getUsuarios();

        if (response.status === 200) {
          setUsuarios(response.data.usuarios);
        } else {
          console.error('Error al cargar usuarios:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error.message);
      }
    }

    cargaUsuarios();
  }, []);

  return (
    <>
      <Container>
        <CrearUsuario />
        {/* <ActUsuario /> */}
        <ActUsuario findUsuario={findUsuario} />
        <BorrarUsuarios />
      </Container>

      <Container>
        {usuarios.map(
          ({
            _id,
            username,
            name,
            lastname,
            password,
            email,
            direccion,
            barrio,
            municipio,
            provincia,
            telefono,
          }) => (
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
          )
        )}
      </Container>
    </>
  );
};

export default AdmUsuarios;
