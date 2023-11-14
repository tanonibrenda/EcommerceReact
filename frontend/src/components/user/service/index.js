import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

export const getUsers = async (url) => {
  try {
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la data", error);
    throw error;
  }
};
