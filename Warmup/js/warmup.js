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


// 1. Saludo inicial al cliente (Sin parámetros)
// function darBienvenida() {
//  return "¡Bienvenido a la Tienda de Mascotas!";
// }

const darBienvenida = () => "¡Bienvenido a la Tienda de Mascotas!"
console.log(darBienvenida())

// 2. Calcular el precio total con IVA (Dos parámetros)
// function calcularTotal(precio, cantidad) {
//  return precio * cantidad * 1.21;
// }

const calcularTotal = (precio, cantidad) => precio * cantidad * 1.21
console.log(calcularTotal(20,5))

// 3. Formatear el nombre de la mascota (Un parámetro)
//function nombrarMascota(nombre) {
//  return "Mascota: " + nombre;
//}

const nombrarMascota = nombre => "Mascota: " + nombre
console.log(nombrarMascota("Hamster"))

// 4. Aplicar descuento especial (Varias líneas de código)
//function calcularDescuento(precio, esSocio) {
// if (esSocio) {
//   return precio * 0.8; // 20% de descuento
// } else {
//   return precio;
//  }
//}

const calcularDescuento = (precio, esSocio) => esSocio ? precio * 0.8 : precio
console.log(calcularDescuento(10, true))
console.log(calcularDescuento(10, false))

// Warmup 22/10/2026

const student = {
  name: "Maria", age: 20, califications: [8,9,7,8], active: true
}
console.log(student.name)
console.log(student.califications[0])
student.califications.push(10)
student.active = false
console.log(student)

const fruits = ["apple", "grape", "watermelon", "banana", "eggplant"]
fruits.push("lemon")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)
