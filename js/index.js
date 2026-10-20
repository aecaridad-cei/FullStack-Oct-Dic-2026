const smartphone = {
  model: "Samsung S23",
  user: "Angel",
  inbox: []
}

smartphone.inbox.push("BBVA pago con tarjeta aceptado", "Fitness Park: Hemos renovado tu membresia exitosamente", "Spotify: Nuevas canciones de esta semana")
smartphone.inbox.shift("BBVA pago con tarjeta aceptado")

let totalPending = smartphone.inbox.length
console.log(Object.keys(smartphone))
console.log("A " + smartphone.user + " " + "le quedan " + totalPending + " notificaciones")
console.log(smartphone)