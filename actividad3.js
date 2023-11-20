const pt = require("prompt-sync")({sigint: true})

let esCancelar = false
let numInput
let num
let suma= 0


  while (!esCancelar) {
    numInput = pt("Ingresa un número (o escribe 'cancelar' para finalizar):");

    if (Number(numInput)){
      sum = Number(numInput)
      suma += num
    } else if (numInput !=='cancelar'){
      console.log('Introduce un número valido')
    } else {
      esCancelar = true
    }
  }
  console.log("La suma total de los números introducidos es: " + suma);