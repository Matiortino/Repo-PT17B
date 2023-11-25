'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.size = function(){
   //empieza por el head(rompiendo la recursion)
   if(!this.left && !this.right) return 1;
   //si no hay derecha
   if(!this.left) return 1 + this.right.size();
   //si no hay nada en la izquierda
   if(!this.right) return 1 + this.left.size();

   return 1 + this.left.size() + this.right.size();
}

   
BinarySearchTree.prototype.insert= function(value){
      let newBST = new BinarySearchTree(value);
   //verifica si el valor es mas chico o mas grande que el valor actual del nodo
      if(value > this.value){
         //si la derecha esta vacia
         if(this.right === null){
            //inserta nuevo nodo
            this.right = newBST
         }else{
            //recursion si no esta la derecha vacia para recorrerlo de forma recursiva hasta que se encuentre lo vacio
            this.right.insert(value);
         }
      }else{
         if(value < this.value){
            if(this.left === null){
               this.left = newBST
            }else{
               this.left.insert(value);

      }
   }
}
}
   BinarySearchTree.prototype.contains = function(value){
      //romper la recursion
      if(value === this.value) return true;

      if(value > this.value){
         //chequear si estamos en el final de la rama
         if(this.right === null) return false;
         //recorrer de forma recursiva toda la rama ahora
         return  this.right.contains(value);
      }
         if(value < this.value){
            //chequear si estamos en el final de la rama
            if(this.left === null) return false;
            //recorrer de forma recursiva toda la rama ahora
            return  this.left.contains(value);
      }
   }


   BinarySearchTree.prototype.depthFirstForEach= function(cb, order){
      if(order === "pre-order"){
         cb(this.value);
         if(this.left !== null)this.left.depthFirstForEach(cb,order);
         if(this.right !== null)this.right.depthFirstForEach(cb,order);
      }else if(order === "post-order"){
         if(this.left !== null)this.left.depthFirstForEach(cb,order);
         if(this.right !== null)this.right.depthFirstForEach(cb,order); 
         cb(this.value);
      }else {
         if(this.left !== null)this.left.depthFirstForEach(cb,order);
         cb(this.value);
         if(this.right !== null)this.right.depthFirstForEach(cb,order); 
      }
   }
   
   

   BinarySearchTree.prototype.breadthFirstForEach= function(cb, queue = []){
      //guardar en nodo de la izquierda
      if(this.left !== null){
         //si el nodo de la izquierda no esta vacio agregamelo 
         queue.push(this.left);
      //guardar en nodo de la derecha
      }
      
      if(this.right !== null){
         //si el nodo de la derecha no esta vacio agregamelo 
         queue.push(this.right);
      }
      //ejecutar el CB en el nodo actual
      cb(this.value);

      //recursion en el queue
      if(queue.length > 0){
         queue.shift().breadthFirstForEach(cb, queue);
      }

   }



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
