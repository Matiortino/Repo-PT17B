

// function suma (n){
//     if(n === 1){
//         return "1";
//     }else{
//         return n + suma(n-1);
//     }
// }

// console.log(suma(5)); 


// function calcularFactorial(n) {
//     if(n === 1){
//         return n;
//     }else{
//         return n * calcularFactorial(n - 1);
//     }
//   }

//   console.log(calcularFactorial(10))
  

// function calcularSuma(n) {
//     if(n === 1){
//         return n;
//     }else{
//         return n + calcularSuma(n - 1);
//     }
//     // Tu código aquí
//   }
//   console.log(calcularSuma(5))
  
// function fibonacci(n, fibo = 0, fubo = 1) {

//     if(n === 1){
//         return fubo;
//     }else if(n === 0){
//         return fibo;
//     }
//     return fibonacci(n - 1, fubo, fibo + fubo);
//   }
//   console.log(fibonacci(10)); 
  

// function sumarDigitos(n) {
//     let digito = [];
//     let numeros = n.toString();
//     let num = numeros.split("").map(Number);

//     return num 
//   }  


// function esParOImpar(numero) {
//     if(numero % 2 === 0){
//         return "Es par"
//     }else{
//         return "Es impar"
//     }
//   }
//   console.log(esParOImpar(5))

//   function determinarSigno(numero) {
//     if(numero > 0){
//         return "Es positivo";
//     }else{
//         return "No es positivo";
//     }
//   }
//   console.log(determinarSigno())

var persona1={
    nombre: "Carlos",
    apellido: "Vega"
}

var persona2 = persona1;

console.log(persona1);
console.log(persona2);

persona1.nombre = "Otro nombre";

console.log(persona1);
console.log(persona2);



//   this.head = null;
//   this.tail = null;
// }

// function Node(value){

//     this.value = value;
//     this.next = null;
// }

//     metodo para agregar nodo
// LinkedList.prototype.add = function(value){
//     let newNode = new Node(value);
      
//     if(this.tail === null){
//       this.head = newNode;
//       this.tail = newNode;
//     }else{
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
// }
//     var miLista = LinkedList();

//     miLista.add()

// metodo para eliminar nodo

// LinkedList.prototype.remove = function (value){
  
//   if(this.head === null){
//     return null;
//   }
  
//   let removedValue = this.tail.value;
//   if(this.head === this.tail){
//     this.head = null;
//     this.tail = null;
//   }else{
//     let current = this.head;
//     while(current.next !== this.tail){
//       current = current.next;
//     }
//     current.next = null;
//     this.tail = current;
//   }
//   return 
// }

