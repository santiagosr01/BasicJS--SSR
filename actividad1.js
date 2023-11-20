const pt = require("prompt-sync")({sigint: true})

const nombre = pt("¿Cuál es tu nombre? =>");
const edad = pt("¿Cuál es tu edad? =>");


if (edad >= 18) {
  console.log(nombre + ", ya puedes conducir. Rotonda sin fuente, rotonda de frente");
} else {
  console.log(nombre + ", aun no puedes conducir chavalin");
}

