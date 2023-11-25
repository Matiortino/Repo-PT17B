'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = [];
  let right = [];
  

  for(let i = 0; i < array.length; i++){
    if(array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let arrayDividido = dividir(array);
  let mitad1 = arrayDividido[0];
  let mitad2 = arrayDividido[1];

  return juntar(mergeSort(mitad1), mergeSort(mitad2));

  function dividir (arr){
    var midIndex = Math.floor(arr.length / 2);
    var mitad1 = arr.slice (0, midIndex);
    var mitad2 = arr.slice (midIndex);

    return [mitad1, mitad2];
  }

  function juntar (mitad1, mitad2){
    var aux = [];
    var i = 0;
    var j = 0;

    while(i < mitad1.length && j < mitad2.length){
      if(mitad1[i] < mitad2[j]){
        aux.push(mitad1[i]);
        i++;
      }else{
        aux.push(mitad2[j]);
      }j++;
   }
  return aux.concat(mitad1.slice(i)).concat(mitad2.slice(j));

  }

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
