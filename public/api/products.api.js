

const API_URL = "/item/getAll";

export const fetchProducts = async () => { 
    const response = await fetch(API_URL); 
    if (!response.ok) { 
        throw new Error(`Error al obtener los productos: ${response.statusText}`); 
    }

    return await response.json(); 
};
