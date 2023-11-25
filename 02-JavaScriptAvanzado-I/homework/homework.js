x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
  
  
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
//SI, LAS VARIABLES DECLARADAS FUERA DE LAS FUNCIONES TIENEN UN ALCANCE GLOBAL 
//Y DENTRO DE LAS FUNCIONES EL ALCANCE ES MAS BIEN DE FUNCION



console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
//POR EL ORDEN DE LAS LINEAS DA UNDEFINED LA IMPRESION DE BAR Y BAZ

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
//SI ES TRUE VA IMPRIMIR FRANCO A PESAR DE QUE LA VARIABLE YA ESTE NOMBRADA

var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); x
   }
})();
console.log(instructor);
//EN LA PRIMER IMPRESION IMPRIME TONY POR EL CONTEXTO GLOBAL
//EN LA SEGUNDA IMPRESION YA ES DENTRO LA FUNCION ASI QUE ES UN CONTEXTO FUNCION, POR LO TANTO
//SI ES TRUE IMPRIME FRANCO
//Y EN LA ULTIMA IMPRESION, IMPRIME TONY PORQUE LA FUNCION ANTERIOR ESTA CERRADA Y HACE REFERENCIA
//A LA VARIABLE DEL CONTEXTO GLOBAL

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
//LO MISMO QUE ANTES, LAS IMPRESIONES DENTRO DE LA FUNCION SON DE CONTEXTO FUNCION
// LAS OTRAS DOS SON DE CONTEXTO GLOBAL

// function test() {
//     console.log(a);
//     console.log(foo());
 
//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }
 
//  test();
 //SALE UNDEFINED EN LA IMPRESION DE A PORQUE NO ESTA ASIGNADO EL VALOR AUN, EN ESE MOMENTO DE LA IMPRESION


 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
//INDICA PRIMERO QUE LA VARIABLE SNACK EN MEOWMIX, PERO SI DENTRO DE LA FUNCION FOOD ES FALSO, NO SE CUMPLE LA CONDICION
//Y SE ANULA LA EJECUCION,

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
// EN EL PRIMER CONSOLE CLARAMENTO HACE REFERENCIA AL OBJETO EN EL CONTEXTO O AMBITO FUNCION
// EL EL SEGUNDO CONSOLE IMPRIME UNDIFINED PORQUE ESTA HACIENDO REFERENCIA A UN OBJETO DEL AMBITO
//GLOBAL

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();

 //EL PRIMERO EN IMPRIMIR VA SER EL "1", YA QUE JAVASCRIPT ESTABLECE COMO PARAMETRO LA IMPRESION EN 
 //4 MILISEGUNDOS COMO MINIMO
 //EL SEGUNDO VA SER EL 4 POR LA MISMA RAZON
 //EL TERCERO VA SER EL 3 YA QUE INDICA QUE SE DEBE IMPRIMIR SON SETTIMEOUT (METODO) EN "0" MILISEGUNDOS
 //LO CUAL NO SE PUEDE PORQUE JS ESTABLECE QUE COMO MINIMO SEA 4 MILISEGUNDOS
 //EL CUARTO VA SER EL 2 PORQUE SE INDICO QUE DEBE SER IMPRESO EN 1000 MILISEGUNDOS(1/UN SEGUNDO), ES DECIR,
 //MAS TARDE QUE LOS OTROS TRES

