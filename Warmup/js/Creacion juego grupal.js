// 1. El Apodo (1 parámetro)

const createNickname = name => "El gran " + name;
console.log (createNickname("Juan"))

// 2. Estadísticas de Combate (2 parámetros)

const calculatePower = (strength, agility) => (strength + agility) * 2;
console.log(calculatePower(15, 30))

// 3. Clase Inicial (0 parámetros)
const generateBaseClass = () => "Aldeano Nivel 1";
console.log(generateBaseClass());

// 4. Detector de Vida (Expresión booleana)

const stillAlive = healthPoints => healthPoints > 0;
console.log(stillAlive(10)); // true
console.log(stillAlive(0));  // false

// 5. Sistema de Rangos (Múltiples líneas con if / else)

const assignRank = (level) => level < 10 ? "Novato" : level <= 49 ? "Aventurero" : "Leyenda";
console.log(assignRank(25))