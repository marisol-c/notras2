let fs = require('fs');

let process = require('process'); 
let comando = process.argv[2];
let titulo = titulo.argv[3];
let estado = estado.argv[4];
let tareas = require('./funciones/funcionesDeTareas');

switch (comando) {
    case "agregar" :
        tareas.agregar(titulo,estado);
            break;
        case "listar":
            tareas.listar();
            break;
     case "undefined" :
        console.log("atención tienes que pensar una acción");
        break;
    default:
        console.log("no entiendo que queres hacer");
        break;
}

