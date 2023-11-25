'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
      this.head = null;
}

LinkedList.prototype.add = function(value){
  //crear nuevo nodo
  let newNode = new Node(value);
  //guardar al nodo en la lista() al final)
  //la lista esta vacia??

  if(this.head === null){
    this.head = new Node(value)
    return;
    //si la lista no esta vacia
  }else{
    let current = this.head
    while(current.next !== null){
      current = current.next
    }
    current.next = newNode;
    return newNode;
    }
  
}



LinkedList.prototype.remove = function(value){
  //ver si la lista esta vacia
    if(this.head === null){
      return null;
    }
    //la lista solo tiene un elemento
  if(this.head && !this.head.next){
    //agregamos el nodo eliminado para que el usuario lo pueda ver
    let removedNode = this.head;
    //eliminamos la referencia del this.head
    this.head = this.head.next;
    //retornamos el nodo removido
    return removedNode.value;
  }
  let current = this.head
  while(current.next.next){//mientras next.next tenga algo, avanzamos
    current = current.next
  }
  let removedNode = current.next; 
  current.next = null; //cuando el next.next no tenga algo  igualamos la referencia a null

  return removedNode.value;
}
 
  
  LinkedList.prototype.search = function(value){
    //ver si la lista esta vacia devuelve null
    if(this.head === null) return null;
      //si no esta vacia que pasa?

      //agarramos la referencia
      let current = this.head;
      //toma el primer nodo y
      //mientras tengamos un nodo se ejecuta el codigo
      while(current){
        //revisa si el valor concuerda
        if(current.value === value)return current.value; //evalua si la cabeza de la cadena es igual al valor recibido
          //chequeamos que sea una funcion
        else if(typeof value === 'function'){//verifica si el valor recibido es una funcion
          //si el valor es una funcion debemos ejecutar la funcion pasandolo el valor del nodo actual
          if(value(current.value)) return current.value;
        }
          //romper si o si el LOOP
          current = current.next;
        }
    //si no encuentra el valor buscado
    return null;
      }


function Node(value) {
  this.value = value;
  this.next = null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
//como nos pide 35 buckerts vamos a crear la propiedad
this.numbuckets = 35;
//donde se van a guardar cada uno de esos buckets? en un array que creamos
this.buckets = [];
}

HashTable.prototype.hash = function(key){
  //creamos una key y lo encripta
  let sum = 0;
  for(let i = 0; i < key.length; i++){
    //metodo para obtener el codigo ASCII de la key(palabra que me brindan para ser usada de clave) y suma cada caracter  del codigo
    sum += key.charCodeAt(i);
  }
  return sum % this.numbuckets
}

HashTable.prototype.set = function(jey, value){
  //validar si el key es un string
  if(typeof key !== "string") throw new TypeError("Keys must be a string");

  let index = this.hash(key)
  //guardar valor
  this.buckets[index] = {
    key: value
  }
}
HashTable.prototype.get = function(key){
  //chequear si es un string
  if(typeof key !== "string") throw new TypeError("Keys must be a string");
  //encontrar el index
  let index = this.hash(key);
  return this.buckets[index][key];
}
HashTable.prototype.hasKey = function(key){
 //chequear si es un string
  if(typeof key !== "string") return true;
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
