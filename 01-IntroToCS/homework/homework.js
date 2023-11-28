'use strict';
function BinarioADecimal(num) {
   
   console.log(BinarioADecimal("1101"))
   return deci;
}

function DecimalABinario(num) {
   if(num === 0){
      return "0";
   }//se verifica si el numero es 0, porque si es 0 su binario va ser 0 y no tendria sentido seguir con el caluclo en el bucle

   let bina = "";

   while(num > 0){
      let resto = num % 2;
      //resto va ser el numero que quedo luego de dividir num por 2
      bina = resto.toString() + bina;
      //cada resto va concatenarse en una cadena y estos se concantenan a bina que ya estaba siendo una cadena vacia
      num = Math.floor(num/2);
      //math.floor es metodo para redondear numeros decimales(es decir, numeros con coma)
   }
   return bina;
}
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
