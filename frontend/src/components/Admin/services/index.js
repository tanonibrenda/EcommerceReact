//métodos del backend index.js de carpeta services del front
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


export const getUsuarios = async () => {
  try {
    const response = await axios.get(`${baseUrl}/usuarios`);
    console.log('index de services de admin')
    return response.data;
  } catch (error) {
    console.error("Error al obtener la data", error);
    throw error;
  }
};

export const findUsuario = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la data", error);
    throw error;
  }
};
export async function saveUsuario(usuarioData) {
  const formData = new FormData();
  formData.append("usuario", usuarioData.username);
  formData.append("nombre", usuarioData.name);
  formData.append("apellido", usuarioData.lastname);

  formData.append("password", usuarioData.password);
  formData.append("email", usuarioData.email);
  formData.append("direccion", usuarioData.direccion);
  formData.append("barrio", usuarioData.barrio);
  formData.append("municipio", usuarioData.municipio);
  formData.append("provincia", usuarioData.provincia);
  formData.append("telefono", usuarioData.telefono);
 

  try {
    const response = await axios({
      url: `${baseUrl}/usuarios`,
      method: "POST",
      data: formData
    });
    console.log("Usuario guardado con éxito:", response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    // console.error("Error al guardar el usuario:", error);
    // throw error;
  }
}

export async function ActUsuario(_id, datosNuevo) {
  try {
    const response = await axios({
      url: `${baseUrl}/usuarios/${_id}`,
      method: "PUT",
      data: datosNuevo
    });
    console.log("daros modificados con éxito:", response.data);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function BorrarUsuarios(_id) {
  try {
    const response = await axios({
      url: `${baseUrl}/usuarios/${_id}`,
      method: "DELETE"
    });
    console.log("Usuario borrado con éxito:", response.data);
    return response;
  } catch (e) {
    console.log(e);
  }
}
