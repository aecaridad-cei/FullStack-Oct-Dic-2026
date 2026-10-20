const viewers = [
  {name: "Eduardo", age: 33, haveTicket: true},
  {name: "Aaron", age: 21, haveTicket: false},
  {name: "Ana", age: 12, haveTicket: true}
]

if(viewers[0].haveTicket === false){
  console.log("Debes comprar una entrada primero")
} else if (viewers[0].haveTicket === true && viewers[0].age >= 18){
  console.log("¡Bienvenido al cine!")
} else if (viewers[0].haveTicket === false && viewers[0].age < 17) {
 console.log ("Tienes la edad necesaria pero necesitas comprar la entrada primero") 
}
else {
  console.log("Acceso denegado, eres menor de edad")
}

if(viewers[1].haveTicket === false){
  console.log("Debes comprar una entrada primero")
} else if (viewers[1].haveTicket === true && viewers[1].age >= 18){
  console.log("¡Bienvenido al cine!")
} else if (viewers[1].haveTicket === false && viewers[1].age < 17) {
 console.log ("Tienes la edad necesaria pero necesitas comprar la entrada primero") 
}
else {
  console.log("Acceso denegado, eres menor de edad")
}

if(viewers[2].haveTicket === false){
  console.log("Debes comprar una entrada primero")
} else if (viewers[2].haveTicket === true && viewers[2].age >= 18){
  console.log("¡Bienvenido al cine!")
} else if (viewers[2].haveTicket === false && viewers[2].age < 17) {
 console.log ("Tienes la edad necesaria pero necesitas comprar la entrada primero") 
}
else {
  console.log("Acceso denegado, eres menor de edad")
}