const pt = require("prompt-sync")({sigint: true})

let cadenaInput = pt("Introduce un texto -> ")
let palabra
let cadena =""


  while (cadenaInput != "cancelar") {
  
    if (String(cadenaInput)) {
      palabra = String(cadenaInput)
      cadena = (cadena + palabra+ "-")
    }  else {
      console.log('Solo se aceptan valores alfabeticos');
    }
    cadenaInput = pt("Introduce un texto -> ")
  }
  console.log("La cadena introducida es: " + cadena);