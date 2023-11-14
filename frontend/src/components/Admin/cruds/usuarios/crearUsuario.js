import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveUsuario } from '../../services';

function CrearUsuario() {

//constantes para manejar show y actualizar estado
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// constantes con los valores del fomulario
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword ]= useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [barrio, setBarrio] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [provincia, setProvincia ]= useState("");
    const [telefono, setTelefono] = useState("");
    // const [avatar, setAvatar] = useState("");

    // const inputFileRef = useRef();

    const handleSubmit = () => {
        // if (inputFileRef.current.files.length > 0) {
            const usuarioData = {
                username,
                name,
                lastname,
                password,
                email,
                direccion,
                barrio,
                municipio,
                provincia,
                telefono
                // avatar: inputFileRef.current.files[0],
            };
    
            saveUsuario(usuarioData)
                .then(() => {
                    handleClose();
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Error al crear usuario:", error);
                });
        } 

    return (
        <div>
        
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear Usuario</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control placeholder="Elija un nombre de Usuario" name='username' onChange={(event) => { setUsername(event.target.value) }} />
                            </Form.Group>
                        </Row>
                       
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Ingrese su Nombre" name='name' onChange={(event) => { setName(event.target.value) }} />
                            </Form.Group>
                        </Row>
                       
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="lastname"><Form.Label>Apellido</Form.Label>
                            <Form.Control placeholder="Ingrese su Apellido" name='lastname' onChange={(event) => { setLastname(event.target.value) }} />
                            </Form.Group>
                            </Row>
                       
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control placeholder="Ingrese su Contraseña" name='password' onChange={(event) => { setPassword(event.target.value) }} />
                            </Form.Group>                          
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control placeholder="Ingrese su Correo electrónico" name="email" onChange={(event) => { setEmail(event.target.value); }}/>
    </Form.Group>
</Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="direccion">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control placeholder="Ingrese su direccion" name='direccion' onChange={(event) => { setDireccion(event.target.value) }} />
                            </Form.Group>
                        </Row>
                      
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="barrio">
                                <Form.Label>Barrio</Form.Label>
                                <Form.Control placeholder="Ingrese su Barrio" name='barrio' onChange={(event) => { setBarrio(event.target.value) }} />                               
                            </Form.Group>
                        </Row>
                       
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="municipio">
                                <Form.Label>Municipio</Form.Label>
                                <Form.Control placeholder="Ingrese su Municipio" name='municipio' onChange={(event) => { setMunicipio(event.target.value) }} />
                            </Form.Group>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="provincia">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control placeholder="Ingrese su Provincia" name='provincia' onChange={(event) => { setProvincia(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="telefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control placeholder="Ingrese su Telefono" name='telefono' onChange={(event) => { setTelefono(event.target.value) }} />
                            </Form.Group>
                           
                        </Row>

                        
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Crear Usuario</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        
            </div>
    )
    };
    export default CrearUsuario;
