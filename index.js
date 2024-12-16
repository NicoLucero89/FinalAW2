import express from 'express';

import mongoose from 'mongoose';
import { readFile, writeFile } from 'fs/promises';
import cors from 'cors'//agregado ultimo

import userRouter from './routes/usuario.routes.js';
import itemsRouter from './routes/productos.routes.js';
import saleRouter from './routes/ventas.routes.js';
import postRouter from './routes/post.routes.js'
import categoryRoutes from './routes/categoria.routes.js'


import 'dotenv/config';

console.log('MONGODB_URI:', process.env.MONGODB_URI);//agregado




const app = express();
const port = process.env.PORT;

// Middleware para parsear JSON
app.use(express.json());


// CORS (Cross-Origin Resource Sharing) mecanismo de seguridad
app.use(cors({
    origin:'http://127.0.0.1:5500'// revisar el origen y corregir 
}))
// inicia el servidor
app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}`);
});
// rutas de API para usar en postman /*RUTAS DE END-POINT */
app.use('/user', userRouter);
app.use('/item', itemsRouter);
app.use('/sale', saleRouter);
app.use('/posts', postRouter);// para los post
app.use('/categories', categoryRoutes)

/*PARA LEVANTAR NUESTRO FRONT-END */ // Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('./public'))














