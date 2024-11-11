/** CLASE 16 - MONGO AVANZADO 1 **/

//1) Indexación. 
//2) Manejo de populations en MongoDB
//3) Middleware llamado: PRE

////////////////////////////////////////////////////////////////////

// import mongoose from "mongoose";
// import UserModel from "./models/usuario.model.js";

// const main = async () => {
//     await mongoose.connect("mongodb+srv://coderhouse:coderhouse@cluster0.pkbm4.mongodb.net/MongoAvanzado?retryWrites=true&w=majority&appName=Cluster0"); 

//     const respuesta = await UserModel.find({edad: {$lt: 19}}).explain("executionStats"); 
//     console.log(respuesta);
// }

// main(); 

//Usamos el método explain()que me permite ver las estadisticas de la consulta. 
//El parametro que le tenemos que pasar es "executionStats", que me permite obtener el detalle de los tiempos de consulta. 

//Hacemos una consulta SIN NINGUN TIPO DE INDICE.

//Me retorna: 
//nReturned: 25000
//executionTimeMillis: 24

//Buscamos por el nombre: "Carlos". 

//nReturned: 111
//executionTimeMillis: 20


//Aplicamos el indice al nombre. Buscamos nuevamente a "Carlos": 
//nReturned: 111
//executionTimeMillis: 1

//CONSULTAMOS POR EDAD: Buscamos usuarios menores a 19 años. 
//nReturner: 384
//executionTimeMillis: 35

//Aplicamos el indice a edad:
//nReturned: 384
//executionTimeMillis: 1

//NOTABLE LA DIFERENCIA

///2) POPULATIONS: 

import mongoose from "mongoose";
import AlumnoModel from "./models/alumno.model.js";
import CursoModel from "./models/curso.model.js";

const main = async () => {
    await mongoose.connect("mongodb+srv://coderhouse:coderhouse@cluster0.pkbm4.mongodb.net/MongoAvanzado?retryWrites=true&w=majority&appName=Cluster0"); 

    //Voy a buscar al alumno Juan: 
    /*const estudianteJuan = await AlumnoModel.findById("6731d87cea446e04cd6a4d24");

    //Voy a buscar el curso de Backend:
    const cursoBackend = await CursoModel.findById("6731d89bea446e04cd6a4d2b");

    console.log(estudianteJuan);
    console.log(cursoBackend);

    //Ahora ingreso el curso al alumno: 
    estudianteJuan.cursos.push(cursoBackend); 

    //Actualizamos el documento de la Base de datos: 
    await AlumnoModel.findByIdAndUpdate("6731d87cea446e04cd6a4d24", estudianteJuan);
    */
    /*VOY A MOSTRAR A JUAN POR CONSOLA: */
    const estudianteConCursos = await AlumnoModel.findById("6731d87cea446e04cd6a4d24")
    // .populate("cursos");
    console.log(estudianteConCursos);
}

main(); 