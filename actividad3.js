const pt = require("prompt-sync")({sigint: true})

var suma = 0;

  while (true) {
    var input = pt("Ingresa un número (o escribe 'cancelar' para finalizar):");

    if (input.toLowerCase() === "cancelar") {
      break;  
    }

    var numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("No entendido. Ingresa un número válido.");
    } else {
      suma += numero;
    }
  }

  console.log("La suma total de los números introducidos es: " + suma);