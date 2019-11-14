/*
  Una empresa que se dedica del cuidado y mangtenimiento de los bosques, te pide un sofware para calcular la edad de diferentes especies de plantas.
  1. Crar una función que devuelta direrentes funciones para los casos:
  - Si es un pino, la edad será el diámetro (cm) dividido entre dos.
  - Si es un abeto, la edad será la (altura (cm) * diámetro (cm))/ 10
  - Si es tomillo, será la altura * 5
  2. Utilizar las funciones creadas para cada caso.
*/

function calcAge(type) {
  if(type === 'pino') {
    return function(diameter) {
      console.log("La edad del pino es de: ", diameter/2);
    }
  }
  else if(type === 'abeto') {
    return function(diameter, height) {
      console.log("La edad del abeto es de: ", (height * diameter)/10);
    }
  }
  else if(type === 'tomillo') {
    return function(height) {
      console.log("La edad del tomillo es de: ", height * 2);
    }
  }
}

var calcAgePino = calcAge('pino');
var calcAgeAbeto = calcAge('abeto');
var calcAgeTomillo = calcAge('tomillo'); */
/*
  Una vez ejecutado "var calcAgePino = calcAge('pino');"" var calcAgePino es:
  var calcAgePino = function(diameter) {
    console.log("La edad del pino es de: ", diameter/2);
  }
*/
calcAgePino(100);
calcAgeAbeto(10, 300);
calcAgeTomillo(300);
