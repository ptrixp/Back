/** CLASE 14 con MONGOOSE **/

/*Temas de hoy: 
1) Clientes de base de datos. 
2) MongoDB Atlas
3) DBass (Database as a service)
4) Configuración e instalación de Mongoose. 
5) CRUD en nuestra app. */

import express from "express";//importar
const app = express(); 
const PUERTO = 8080; 

//Conexion con el router de clientes: 
import clientesRouter from "./routes/clientes.router.js"; 

//Nos conectamos a la Base de datos: 
import mongoose from "mongoose";
//ir a drivers y copiar el enlace
mongoose.connect("mongodb+srv://coderhouse:coderhouse@cluster0.pkbm4.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD"))
    .catch((error) => console.log("Tenemos un error: ", error))

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
app.use("/clientes", clientesRouter); 

app.listen(PUERTO, () => console.log(`Escuchando en el puerto: ${PUERTO}`)); 