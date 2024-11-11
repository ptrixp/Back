import { Router } from "express";
const router = Router(); 

//1) Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento

//Importamos al ProductModel:
import ProductModel from "../models/product.model.js";

router.get("/products", async (req, res) => {
    const productos = await ProductModel.find().lean(); 
    //Acá recupero los productos del JSON y se los tengo que enviar a la vista "home"
    res.render("home", {productos}); 
    //Estamos renderizando la vista "home" y a la vez le estoy enviando un array con todos los productos de mi inventario. 
    //Atención! También se puede trabajar con try - catch para capturar algun error. 
})

//Además, crear una vista “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con websockets.

router.get("/realtimeproducts", async (req, res) => {
    res.render("realtimeproducts"); 
})


export default router; 