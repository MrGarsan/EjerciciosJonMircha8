//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
console.log("%cEjercicio 24", "font-weight:bold; font-size:12px");

const numerosAscDesc = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");

  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  const descendente = (a, b) => b - a;
  const ascendente = (a, b) => a - b;
  return console.log(`El array original es: ${numerosArray}.
    El array en orden ascendente es: ${numerosArray.sort(ascendente)}.
    El array en orden descendente es: ${numerosArray.sort(descendente)}.`);
};

numerosAscDesc([7, 5, 2, 8, 6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
console.log("%cEjercicio 25", "font-weight:bold; font-size:12px");

const eliminarDuplicados = (elementosArray) => {
  if (elementosArray === undefined || elementosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(elementosArray))
    return console.error("Has introducido un dato que NO es un array.");

  const detector = (a, i) => {
    return elementosArray.indexOf(a) === i;
  };
  let elementosFiltrados = elementosArray.filter(detector);

  return console.log(`El array original es el siguiente: ${elementosArray}.
El array sin elementos duplicados es el siguiente: ${elementosFiltrados}.`);
};

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
console.log("%cEjercicio 26", "font-weight:bold; font-size:12px");

const promedioArray = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }

  const suma = (a, b) => {
    return a + b;
  };
  let total = numerosArray.reduce(suma);
  let promedio = total / numerosArray.length;

  return console.log(`El array original es: ${numerosArray}.
El promedio del array es ${promedio}.`);
};

promedioArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

console.log(
  "%c8va Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
