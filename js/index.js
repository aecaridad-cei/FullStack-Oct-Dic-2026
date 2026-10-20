let age = 19
let haveTicket = true

if(haveTicket === false){
  console.log("Debes comprar una entrada primero")
} else if (haveTicket === true && age >= 18){
  console.log("¡Bienvenido al cine!")
} else if (haveTicket === false && age < 17) {
 console.log ("Tienes la edad necesaria pero necesitas comprar la entrada primero") 
}
else {
  console.log("Acceso denegado, eres menor de edad")
}