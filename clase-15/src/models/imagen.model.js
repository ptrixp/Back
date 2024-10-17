import mongoose from "mongoose";

const imagenSchema = new mongoose.Schema({
    title: String,
    description: String, 
    filename: String, 
    path: String
})

//(nombre de la coleccion, schema)
const ImagenModel = mongoose.model("imagenes", imagenSchema); 

export default ImagenModel; 