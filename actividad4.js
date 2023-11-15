const pt = require("prompt-sync")({sigint: true})

var cadenas = [];

while (true) {
  var input = pt("Ingresa una cadena de texto (o escribe 'cancelar' para finalizar):");

  if (input.toLowerCase() === "cancelar") {
    break;  
  }

  cadenas.push(input);
}

var resultado = cadenas.join('-');

console.log("Cadenas concatenadas: " + resultado);