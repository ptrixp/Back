/**Clase 9 - MOTORES DE PLANTILLAS */


//instalamos express-handlebars e importamos
import express from "express";
import {engine} from "express-handlebars";
const app = express();
const PUERTO = 8080;

//Middleware: entidades intermedias que trabajan entre la peticion intermedia y el servidor
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Express-handlebars
app.engine('handlebars', engine()); //configurar motor de plantillas
app.set('view engine', 'handlebars'); //cada que encuentra elm otor trabaja con eso
app.set('views', './src/views'); //los archivos a trabajar o vistas

//ruta
app.get("/", (req, res) => {
    //crear objeto usuario

    const usuario ={
        nombre:"Tin",
        apellido: "Winki",
        mayorEdad: true
    }

    res.render("index", {usuario});
})

app.get("/contacto", (req, res) => {
    res.render("contacto");
})

//mostramos el archivo productos.handlebars:
app.get("/productos", (req, res) => {
    res.render("productos");
})

app.listen(PUERTO, () => {
    console.log("Trabajando en el puerto 8080");
})

