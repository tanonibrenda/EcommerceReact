import React, { useState } from 'react';
import userData from '../../data/userData.json'
 

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [newLastname, setNewLastname] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newNeighborhood, setNewNeighborhood] = useState('');
  const [newMunicipality, setNewMunicipality] = useState('');
  const [newProvince, setNewProvince] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buscar el usuario en el archivo userData.json
    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setError('');
      console.log('Inicio de sesión exitoso:', user);
      // Realizar acciones adicionales si el inicio de sesión es exitoso
    } else {
      setError('Credenciales inválidas');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Generar un nuevo ID basado en el recuento actual de usuarios
    const newUserId = `UsN-${userData.users.length + 1}`;

    // Crear un nuevo usuario
    const newUser = {
      idUser: newUserId,
      username: newUsername,
      password: newPassword,
      name: newName,
      lastname: newLastname,
      email: newEmail,
      direccion: newAddress,
      Barrio: newNeighborhood,
      municipio: newMunicipality,
      provincia: newProvince,
      telefono: newPhone,
    };

    // Agregar el nuevo usuario al arreglo
    userData.users.push(newUser);

    // Realizar acciones adicionales si es necesario
    console.log('Nuevo usuario creado:', newUser);



    // Limpia los campos después de crear la cuenta
    setNewUsername('');
    setNewPassword('');
    setNewName('');
    setNewLastname('');
    setNewEmail('');
    setNewAddress('');
    setNewNeighborhood('');
    setNewMunicipality('');
    setNewProvince('');
    setNewPhone('');
  };

  return (
    <div className="login-form-container center" style={{ backgroundColor: 'rgb(204, 210, 214)', width: '80%', margin: 'auto', padding: '20px', borderRadius: '10px' }}>
      <div className="form-outline mb-4">
      <form onSubmit={handleSubmit} id="formIngresar" className="form-control">
      <h2 className="mt-1 mb-5 pb-1 center">Ingresar</h2>
        <label style={{ display: 'block' }}>
          Usuario:
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Contraseña:
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-outline-danger center" 
        style={{ marginBottom:'20px', marginTop: '20px' }}

        >Iniciar sesión</button>
      </form>

      {error && <p>{error}</p>}

      <h2 className="mt-1 mb-5 pb-1 center">Crear Cuenta</h2>
      <form onSubmit={handleCreateAccount} id="formIngresar" className="form-control">

      <div className="form-row">
          <div className="form-group col-md-6">
        <label style={{ display: 'block' }}>
          Nombre:
          <input
            className="form-control"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Apellido:
          <input
            className="form-control"
            type="text"
            value={newLastname}
            onChange={(e) => setNewLastname(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
        Contraseña:
          <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setNewPassword(e.target.value)}
         />
        </label>

        <label style={{ display: 'block' }}>
          e-mail:
          <input
            className="form-control"
            type="mail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Dirección:
          <input
            className="form-control"
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Barrio:
          <input
            className="form-control"
            type="text"
            value={newNeighborhood}
            onChange={(e) => setNewNeighborhood(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Municipio:
          <input
            className="form-control"
            type="text"
            value={newMunicipality}
            onChange={(e) => setNewMunicipality(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Provincia:
          <input
            className="form-control"
            type="text"
            value={newProvince}
            onChange={(e) => setNewProvince(e.target.value)}
          />
        </label>
        <label style={{ display: 'block' }}>
          Telefono:
          <input
            className="form-control"
            type="number"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-outline-danger center" 
        style={{ marginBottom:'20px', marginTop: '20px'

        }}>Crear Cuenta</button>
        </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginForm