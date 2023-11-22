// List.js
import React, { useState } from 'react';
import { baseURL } from '../utils/constant';
import axios from 'axios'




const List = ({ id, crud, updateMode, setUpdateUI }) => {
  const [newName, setNewName] = useState(crud?.name || '');
  const [newEmail, setNewEmail] = useState(crud?.email || '');

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateClick = () => {
    setIsEditing(!isEditing);

    // Si estás editando y haces clic en "Update", actualiza los datos
    if (isEditing) {
      updateMode(id, { name: newName, email: newEmail });
    }
  };

  const revomeCrud = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <li class="list-group-item" key={id}>
      <div >
        {isEditing ? (
          <>
            <input
              class="form-control"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              class="form-control"
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <p >Name: {crud?.name || 'N/A'}</p>
            <p >Email: {crud?.email || 'N/A'}</p>
          </>
        )}
      </div>
      <button class="btn btn-warning badge badge-secondary"  onClick={handleUpdateClick}>
        {isEditing ? 'Save' : 'Update'}
      </button>
      <button class="btn btn-danger badge badge-secondary" onClick={revomeCrud}>
        {isEditing ? 'Delete' : 'delete'}
      </button>
    </li>
  );
};
export default List;