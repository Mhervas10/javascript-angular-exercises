'use strict';

/*******************************************************
  let y const en ES6
 *******************************************************/

 /* Comparativa de var y let

 1. Funciones -> funcionan igual

 2. Redeclaración -> var se puede, let NO
    var temp = "this is a temp variable";
    var temp = "this is a second temp variable";

    let temp = "this is a temp variable";
    let temp = "this is a second temp variable"; // Error

 3. En loops, condicionales: var podemos acceder desde fuera, let NO.

 4. Global window: si se declara un var de forma global, esta variable se añade al objeto global, con let NO.
 */

// 2. Prueba redeclaración
/* var temp = "this is a temp variable";
var temp = "this is a second temp variable";

let tempLet = "this is a temp variable";
let tempLet = "this is a second temp variable"; */

// 3. Pueba loop
/* for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); */
/* for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); */

// Prueba Global Object
/* var varVariable = "This is a VAR variable";
let letVariable = "This is a LET variable"; */
