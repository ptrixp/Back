//CLASE 10 - WEBSOCKETS

//levantamos un servidor con Express JS:

import express from "express";
import {engine} from "express-handlebars";
const app = express();
const PUERTO = 8080;

//Middleware
app.use(express.json()); //trabajar con json
app.use(express.urlencoded({extended: true}));//recibir datos completos
app.use(express.static("./src/public"));//conecta con public

//configuramos Express-Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Rutas
app.get("/", (req, res) =>{
    res.render("index");
})

//3. Guardar referencia del servidor de Express JS
const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando puerto: ${PUERTO}`);
})

//WebSocket:
//npm install socket.io
//2. importamos:

import {Server} from "socket.io";

//4. genera instancia de Socket.io del lado del servidor
const io = new Server(httpServer);

//Cada vez que quiero escuchar un mensaje del front lo voy a hacer
// con el método "on" y cada vez que quiero enviar un mensaje al front 
//lo voy a hacer con "emit".

//Vamos a desarrollar un array de usuarios: 
const usuarios = [ //que lo envie el backend
    {id: 1, nombre: "Tinki Winki", apellido: "Teletubbie"},
    {id: 2, nombre: "Dipsi", apellido: "Teletubbie"},
    {id: 3, nombre: "Lala", apellido: "Teletubbie"},
    {id: 4, nombre: "Po", apellido: "Teletubbie"},
    {id: 5, nombre: "Sol", apellido: "Teletubbie"}
]

io.on("connection", (socket) => {
    console.log("Un cliente se conectó");

    socket.on("mensaje", (data) => {
        console.log(data);
    })

    //Ahora el servidor le enviará un mensaje al cliente: 
    socket.emit("saludito", "Hola Cliente, soy el backend, como estas?");

    //Vamos a enviar un array de usuarios al cliente: 
    socket.emit("usuarios", usuarios); 

    //Vamos a escuchar el evento "nuevoUsuario" y lo mostramos por consola: 
    socket.on("usuarioNuevo", (usuario) => {
        //console.log(usuario); 
        usuarios.push(usuario); 
        console.log(usuarios);

        //Una vez que sumamos un nuevo usuario, puedo enviar al front 
        //en tiempo real el array actualizado: 
        io.sockets.emit("usuarios", usuarios); 
    })
})

