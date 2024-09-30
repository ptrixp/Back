const express = require("express");
//incializamos express y la variable app contendrá todas las funcionalidades de express
const app = express();

/* 
urlencoded nos permite que el servidor pueda interpretar mejor los datos complejos que viajen desde la url, 
y mapearlos correctamente en el req.query.
Es importante destacar que siempre tiene que ir por encima de las rutas, ya que es un middleware (ya veremos que es 
más adelante en el curso) que se ejecuta para procesar la información de los endpoints.
*/
app.use(express.urlencoded({ extended: true }));

//endpoint = recibe solucion
app.get("/",(req,res) => {
    res.send("Mi primer servidor de express");
})

//apertura de un "Endpoint", en el cual el cliente va a realizar una petición http, en este caso una peticion get
app.get("/saludo",(req,res) => {
    res.send("Saludo a todas");
})

app.get("/bienvenida", (req, res) => {
    res.send(`<h1 style="color:blue;">¡Bienvenido a mi primer servidor express!</h1>`);
});

app.get("/usuario", (req, res) => {
    const usuarioFalso = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 33,
        correo: "jp@gmail.com",
    };

    res.send(usuarioFalso);
});

// req.params: obtener elementos dinamicos para

app.get("/parametro/:nombre", (req, res) => {
    //destructurar el parametro
    const { nombre } = req.params;
    res.send(`Hola ${nombre}`);
});

const usuarios = [
    { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54 },
    { id: 2, nombre: "Juan", apellido: "Perez", edad: 33 },
    { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21 },
];

app.get("/usuarios/:id", (req, res) => {
    // Obtenemos el parámetro enviado por el cliente
    const { id } = req.params;

    //Buscamos el usuario en el array
    // Utilizamos el método Number() para transformar el parámetro recibido a formato numérico
    const usuario = usuarios.find((user) => user.id === Number(id));

    // Verificamos si el usuario existe, si no existe retornamos una respuesta con un error
    if (!usuario) return res.send(`Error no se encuentra un usuario con el id ${id}`);

    // En caso que el usuario exista, devolvemos una respuesta con el usuario indicado
    res.send(usuario);
});

//se puede poner más de 2 parametros
app.get("/parametros/:nombre/:apellido", (req, res) => {
    const { apellido, nombre } = req.params;

    res.send(`Bienvenido/a ${nombre} ${apellido}`);
});

// req.query: requiere las multiples consultas para realizar a un endpoint (busquedas)

app.get("/queries", (req, res) => {
    const { nombre, apellido, edad } = req.query;
    if (!nombre || !apellido) return res.send("El nombre y el apellido son obligatorios");
    console.log(edad);
    res.send(`Hola ${nombre} ${apellido}`);
});

const usuarios2 = [
    { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54, genero: "M" },
    { id: 2, nombre: "Juan", apellido: "Perez", edad: 33, genero: "M" },
    { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21, genero: "M" },
    { id: 4, nombre: "Maria", apellido: "Diaz", edad: 26, genero: "F" },
    { id: 5, nombre: "Emilia", apellido: "Gomez", edad: 36, genero: "F" },
    { id: 6, nombre: "Julia", apellido: "Lopez", edad: 44, genero: "F" },
];

app.get("/usuarios2", (req, res) => {
    const { genero } = req.query;
    // Verificamos si el cliente envía la query y si se envía en el formato correcto, sino le retornamos todos los usuarios sin filtrar
    if (!genero || (genero !== "M" && genero !== "F")) return res.send(usuarios2);

    // En caso que la query llegue bien respondemos al usuario con los usuarios filtrados
    const usuariosFiltrados = usuarios2.filter((user) => user.genero === genero);
    res.send(usuariosFiltrados);
});

const users = [];
//creando una nueva funcion de registro
app.get("/register", (req, res) => {
    const { name, lastName, age } = req.query;

    const newUser = {
        id: users.length + 1,
        name,
        lastName,
        age,
    };
    //registrar el usuario
    users.push(newUser);
    //enviar al registro
    res.send(users);
});
//puerto
app.listen(8080, () => {
    console.log("Server on port 8080");
})