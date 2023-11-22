// crud de Crud.js
import React, { useState, useEffect } from 'react';
import List from './List'; 
import axios from 'axios';
import { baseURL } from '../utils/constant';
import ListGroup from 'react-bootstrap/ListGroup';

function Crud() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [crud, setCrud] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setCrud(res.data);
      });
  }, [updateUI]);

  const addCrud = () => {
    const data = { crud: { name: nameInput, email: emailInput } };
    axios.post("http://localhost:5000/api/save", data)
      .then(response => {
        console.log(response.data);
        setNameInput("");
        setEmailInput("");
        setUpdateUI((prevState) => !prevState);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  };

  const updateData = (id, newData) => {
    // Actualiza el estado local con los nuevos datos
    //de alguna manera, estuve los últimos 10 días trabajando casi exclusivamente en el update y no funciona muy bien.
    setNameInput(newData.name);
    setEmailInput(newData.email);
    setUpdateId(id);

    // Luego, realiza la actualización en el servidor
    axios.put(`http://127.0.0.1:5000/api/update/${id}`, { crud: newData })
      .then((response) => {
        console.log(response.data);

        // Después de la actualización, puedes volver a cargar los datos si es necesario
        axios.get(`${baseURL}/get`).then((res) => {
          setCrud(res.data);
        });
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="login-form-container" 
        style={{ backgroundColor: 'rgb(204, 210, 214)', padding: '20px', borderRadius: '10px' }}> 
          <form id="formIngresar" onSubmit={addCrud}>
            <h2 className="mt-1 mb-5 pb-1 text-center">Crear Usuario</h2>

            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Correo Electrónico</label>
              <input
                type="text"
                className="form-control"
                id="emailInput"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success" Button variant="success"
               style={{ width: '25%' }}> 
              Crear
            </button>
          </form>

          <ul className="list-group mt-4 item d-flex justify-content-between align-items-center " >
              {crud.map((crudItem) => (
                <ListGroup.Item key={crudItem._id} action variant="secondary">
                  <List
                    id={crudItem._id}
                    crud={crudItem.crud}
                    updateMode={updateData}
                    setUpdateUI={setUpdateUI}
                    updateId={updateId}
                  />
                </ListGroup.Item>
              ))}
            </ul>
        </div>
      </div>
    </div>
  </div>
);
}

export default Crud;
