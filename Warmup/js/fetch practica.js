const searchProfile = async () => {
  try {
    let user = "aecaridad-cei"
    const serverResponse = await fetch("https://api.github.com/users/${user}")
    const userName = await serverResponse.json()
    console.log("Nombre: ", user)
  } catch(error){
    console.log("Error al conectar Api", error)
  }
}

searchProfile()

const searchProfileTwo = async () => {
  try {
    let user = "Yubiritsaira"
    const serverResponseTwo = await fetch("https://api.github.com/users/${user}")
    if (serverResponseTwo.ok === false) {
      throw new Error("Usuario no encontrado")
    }
    const userName = await serverResponseTwo.json()
    console.log("Nombre: ", user)
  } catch(error){
    console.log("Error al conectar Api", error)
  }
}

searchProfileTwo()