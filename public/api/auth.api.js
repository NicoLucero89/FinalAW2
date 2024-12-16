
export const auth = async({email, contraseña}) => { 
    const response = await fetch('/user/login', { 
        method: "POST", 
        headers: { 
            "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
            "email": email, 
            "contraseña": contraseña 
        }) 
    });

    if(!response.ok){ 
        throw new Error("Error en la petición"); 
    } 

    return response.json(); 
};
