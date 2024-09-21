const http = require("http");

const server = http.createServer((request, response)=>{
    response.end("Respuesta desde mi servidor Backend");
});
//configurar el puerto del servidor: 8080
server.listen(8080, ()=> {
    console.log("Servidor escuchando el puerto 8080");
});