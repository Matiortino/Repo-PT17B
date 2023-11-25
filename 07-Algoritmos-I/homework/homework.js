'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let fact = [1];

  let aux = 2
  
  while(num !== 1){

    if(num % aux === 0){
      fact.push(aux);
      num = num / aux
    }else{
      aux ++;
    }
  }
  return fact;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

 var n = array.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++){
      if(array[j] > array[j + 1]){
        var aux = array[j];
        array[j] = array[j + 1];
        array [j + 1] = aux
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //[2, 3, 9, 5, 1]
  //          i
  //       j

for(let i = 1; i < array.length; i++){
  //let j va ir antes que i, es decir, i va ser el indice del array y j va ir antes como otro indice
 let j = i - 1;
 // aux va indicar el valor de donde se encuentre el indice i
 let aux = array[i];
// mientras la posicion del indice j sea mayor o igual a cero && mientras aux sea menor al valor donde se encuentre el indice j se cumple el ciclo
 while(j >= 0 && aux < array[j]){
  //array de j +(mas) 1 = refiere al que le sigue al valor en el que esta j
  array[j + 1] = array[j];
  j--
 }
 //aca refiere que cuando se cumple el while  la posicion de j valga lo que contiene aux
 array[j + 1] = aux;
}
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var n = array.length;

  for (var i = 0; i < n - 1; i++) {
    // Encuentra el índice del elemento mínimo en la porción no ordenada
    var minInd = i;
    for (var j = i + 1; j < n; j++) {
      if (array[j] < array[minInd]) {
        minInd = j;
      }
    }

    // Intercambia el elemento mínimo con el primer elemento no ordenado
    var aux = array[i];
    array[i] = array[minInd];
    array[minInd] = aux;
  }
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
