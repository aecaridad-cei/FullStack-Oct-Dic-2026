// 1. El Apodo (1 parámetro)

const crearApodo = nombre => "El gran " + nombre;
console.log (crearApodo("Juan"));

// 2. Estadísticas de Combate (2 parámetros)

const calcularPoder = (strength, agility) => (strength + agility) * 2;
console.log(calcularPoder(15, 30));

// 3. Clase Inicial (0 parámetros)
const generarClaseBase = () => "Aldeano Nivel 1";
console.log(generarClaseBase());

// 4. Detector de Vida (Expresión booleana)

const sigueVivo = puntosDeVida => puntosDeVida > 0;
console.log(sigueVivo(10)); // true
console.log(sigueVivo(0));  // false

// 5. Sistema de Rangos (Múltiples líneas con if / else)

const asignarRango = (nivel) => {
    if (nivel < 10) {
        return "Novato";
  } else if (nivel <= 49) {
        return "Aventurero";
  } else {
        return "Leyenda";
  }
};