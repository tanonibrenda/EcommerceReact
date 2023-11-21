import React, { useState, useEffect } from 'react';
import { getUsuarios, ActUsuario } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function ActUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSel, setUsuarioSel] = useState("");
    const [datosUsuario, setDatosUsuarios] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        async function cargaUsuarios() {
            const response = await getUsuarios();

            if (response.status === 200) {
                setUsuarios(response.data.usuarios);
            }
        }
        cargaUsuarios();
    }, []);

    const handleSelUsuario = (event) => {
        const selectedUsuario = usuarios.find((usuario) => usuario.idUser === event.target.value);
        setUsuarioSel(event.target.value);
        setDatosUsuarios(selectedUsuario);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const inputFileRef = useRef();

    const handleSubmit = () => {
        const newUsername = datosUsuario.username;
        const newName = datosUsuario.name;
        const newLastname = datosUsuario.lastname;
        const newPassword = datosUsuario.password;
        const newEmail = datosUsuario.email;
        const newDireccion = datosUsuario.direccion;
        const newBarrio = datosUsuario.barrio;
        const newMunicipio = datosUsuario.municipio;
        const newProvincia = datosUsuario.provincia;
        const newTelefono = datosUsuario.telefono;
        // const newAvatar = inputFileRef.current?.files[0];

        const datosNuevos = {
            idUser: usuarioSel,
            username: newUsername,
            name: newName,
            lastname: newLastname,
            password: newPassword,
            email: newEmail,
            direccion: newDireccion,
            barrio: newBarrio,
            municipio: newMunicipio,
            provincia: newProvincia,
            telefono: newTelefono,
            
          };
          

        const confirmActualizar = window.confirm(`¿Estás seguro que quieres actualizar tus datos?`);

        if (confirmActualizar) {
            ActUsuario(usuarioSel, datosNuevos)
                .then((response) => {
                    handleClose();
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Error al actualizar usuario:", error);
                });
        }
    };

    return (
        <div>
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>
                Actualizar Datos
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Actualizar Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="usuarios">
                            <Form.Label>Seleccione un Usuario</Form.Label>
                            <Form.Select value={usuarioSel} onChange={handleSelUsuario}>
                                <option>Seleccionar usuario</option>
                                {usuarios.map((usuario) => (
                                    <option key={usuario.idUser} value={usuario.idUser}>
                                        {usuario.name} - {usuario.lastname} - {usuario.username} - {usuario.email}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        {usuarioSel && (
                            <div>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Actualizar Nombre</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.name}
                                        name="name"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, name: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="apellido">
                                    <Form.Label>Actualizar Apellido</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.lastname}
                                        name="lastname"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, lastname: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="contrasena">
                                    <Form.Label>Actualizar Contraseña</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.password}
                                        name="password"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, password: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Actualizar Email</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.email}
                                        name="email"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, email: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="direccion">
                                    <Form.Label>Actualizar Dirección</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.direccion}
                                        name="direccion"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, direccion: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="barrio">
                                    <Form.Label>Actualizar Barrio</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.barrio}
                                        name="barrio"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, barrio: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="municipio">
                                    <Form.Label>Actualizar Municipio</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.municipio}
                                        name="municipio"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, municipio: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="provincia">
                                    <Form.Label>Actualizar Provincia</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.provincia}
                                        name="provincia"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, provincia: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="telefono">
                                    <Form.Label>Actualizar Teléfono</Form.Label>
                                    <Form.Control
                                        defaultValue={datosUsuario.telefono}
                                        name="telefono"
                                        onChange={(event) => setDatosUsuarios({ ...datosUsuario, telefono: event.target.value })}
                                    />
                                </Form.Group>
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Actualizar Usuario
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActUsuarios;

