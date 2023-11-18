import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveUsuario } from '../../services/index';

function CrearUsuario({ onUsuarioCreado }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    lastname: '',
    password: '',
    email: '',
    direccion: '',
    barrio: '',
    municipio: '',
    provincia: '',
    telefono: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
     
      const response = await saveUsuario({ ...formData, username: formData.username.toLowerCase() });
      console.log("Usuario guardado con éxito:", response);
      // Actualizar el estado local de los usuarios
      onUsuarioCreado(response.usuario); 
      handleClose();
    } catch (error) {
      // Manejar el error y mostrar mensajes al usuario si es necesario
      console.error('Error al crear usuario:', error);
      
    }
  };

  return (
    <div>
      <Button className='shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>
        Crear Usuario
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  placeholder="Elija un nombre de Usuario"
                  name='username'
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Ingrese su Nombre" name='name' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Lastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Ingrese su Apellido" name='Lastname' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control placeholder="Ingrese su Contraseña" name='password' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control placeholder="Ingrese su Correo electrónico" name="email" onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="direccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="Ingrese su direccion" name='direccion' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="barrio">
                <Form.Label>Barrio</Form.Label>
                <Form.Control placeholder="Ingrese su Barrio" name='barrio' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="municipio">
                <Form.Label>Municipio</Form.Label>
                <Form.Control placeholder="Ingrese su Municipio" name='municipio' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="provincia">
                <Form.Label>Provincia</Form.Label>
                <Form.Control placeholder="Ingrese su Provincia" name='provincia' onChange={handleChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control placeholder="Ingrese su Telefono" name='telefono' onChange={handleChange} />
              </Form.Group>
            </Row>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Crear Usuario
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
}

export default CrearUsuario;
