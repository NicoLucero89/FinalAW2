
const API_URL_BASE = "/item"; 

export const getProductById = async (id) => { 
    const response = await fetch(`${API_URL_BASE}/byId/${id}`); 
    if (!response.ok) throw new Error(`Producto con ID ${id} no encontrado.`); 
    return await response.json(); 
};
