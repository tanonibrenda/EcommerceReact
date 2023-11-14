import React, { useState, useEffect } from 'react';
import { getUsers, deleteUsuario } from '../../services/index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BorrarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSel, setUsuarioSel] = useState("");

    useEffect(() => {
        async function cargaUsuarios() {
            try {
                const response = await getUsers();

                if (response.status === 200) {
                    setUsuarios(response.data.usuarios);
                }
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
            }
        }

        cargaUsuarios();
    }, []);

    const handleSelUsuario = (event) => {
        setUsuarioSel(event.target.value);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro que quieres eliminar esta cuenta de usuario?");

        if (confirmDelete) {
            deleteUsuario(usuarioSel)
                .then((response) => {
                    handleClose();
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Error al borrar usuario:", error);
                });
        }
    };

    return (
        <div>
            <Button className="shadow m-3" variant="primary" type="submit" value="Enviar" onClick={handleShow}>
                Borrar Usuario
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Borrar Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Select value={usuarioSel} onChange={handleSelUsuario}>
                                <option>Seleccionar Usuario</option>
                                {usuarios.map((usuario) => (
                                    <option key={usuario._id} value={usuario._id}>
                                        {usuario.name} - {usuario.lastname} - {usuario.password} - {usuario.email}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleDelete}>
                        Borrar Usuario
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrarUsuarios;

