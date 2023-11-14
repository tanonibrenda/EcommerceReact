// searchApi.js
import productosData from '../data/productosData.json';

const searchProducts = async (term) => {
  try {
    // Filtra los productos que coinciden con el término de búsqueda
    const matchingProducts = productosData.filter((product) =>
      product.nombre.toLowerCase().includes(term.toLowerCase())
    );

    // Simula un tiempo de respuesta del servidor (puedes eliminar esto en producción)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return matchingProducts;
  } catch (error) {
    throw new Error('Error al realizar la búsqueda');
  }
};

export default searchProducts;



