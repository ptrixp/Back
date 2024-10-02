import { Router } from "express";
const router = Router();

//ruta

//array productos:
const arrayProductos = [
    {nombre: "Fideos", descripcion: "rico", precio: 100},
    {nombre: "Arroz", descripcion: "no pasa", precio: 200},
    {nombre: "Helado", descripcion: "frio", precio: 150},

]

router.get("/", (req, res) => {
    //crear objeto usuario

    const usuario ={
        nombre:"Tin",
        apellido: "Winki",
        mayorEdad: true
    }

    res.render("index", {usuario, arrayProductos, titulo:"Express-handlebars"});
})

router.get("/contacto", (req, res) => {
    res.render("contacto");
})

//mostramos el archivo productos.handlebars:
router.get("/productos", (req, res) => {
    res.render("productos");
})
//no olvidar exportar
export default router;