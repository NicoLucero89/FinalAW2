import { addSession } from "../utils/sessionStorage.controller.js"; 
import { alert, handleAlert, handleCloseAlert } from "../components/alert.js"; 
import { auth } from "../api/auth.api.js";

const btnLogin = document.getElementById('btnLogin'); 
const alertContainer = document.getElementById('alert_container'); 
alertContainer.innerHTML = alert('bg-rose-500'); 
const btnCloseAlert = document.getElementById('btnCloseAlert'); 

btnCloseAlert.addEventListener('click', () => { 
    handleCloseAlert(); 
}); 

btnLogin.addEventListener('click', async () => { 
    const email = document.getElementById('txtEmail').value; 
    const contraseña = document.getElementById('txtPass').value; 

    if(email !== '' && contraseña !== ''){ 
        try{ 
            const user = await auth({email, contraseña}); 
            addSession(user); 
            window.location.href="/pages/products/index.html";
        } catch(error){ 
            handleAlert('Hubo un problema para iniciar sesión: ' + error.message); 
        } 
    } else { 
        handleAlert('Hay campos incompletos'); 
    } 
});


