// //Para levantar un servidor
// var http = require('http'); 
// //Requiere una variable http
// //Require => Importacion
// http.createServer(function(req, res){ 
//     //Se crea el servidor a nivel local en base a la variable anterior
//     //Funcion Normal con request y response
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     //200 es el estatus de la pagina
//     res.end('Saludos cordiales');
//     //Escritura en el encabezado de la pagina web

    
// }).listen(3000);
// //listen => Puerto montado en el servidor

// console.log(`Servidor Activo y ejecutandose`);
// //ctrl + c para votar el servidor


// //package.json es como se visualizaran los datos principales,
// //ademas de las dependencias del proyecto

// //Al instalar una dependencia se modifica el package.json y se incluyen mas node-modules
// //uninstall nodemon para borrar el paquete

// //con watch se actualizan los cambios del servidor y con recargar los del navegador

// //no se debe subir node_modules para las dependencias porque ocupa mucho espacion, las dependencias vienen con package.json