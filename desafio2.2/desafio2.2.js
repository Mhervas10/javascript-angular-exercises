/*
  En tu empresa te han pedido un software que de soporte al departamento de marketing.
  Se necesita lleva run seguimiento de las redes sociales.
  1. Crear un contructor de objetos socialNetwork, que contengan los siguientes campos: name, arrayLikes, importance (de 0 a 1), numberOfUsers
  2. Usar el contructor para instanciar tres redes sociales:
    - Facebook con likes [201, 245, 500, 650, 1103, 347], importancia 0.8 y 14530 usuarios.
    - Instagram con likes [303, 21, 124, 150, 23, 31], importancia 0.6 y 230 usuarios.
    - Twiter con likes [205, 518, 1123, 4350, 233, 3431], importancia 0.4 y 3230 usuarios.
  3. Añadir 2 métodos en el constructor para calcular el total de likes y la media de cada red social
  4. Cambiar estos dos métodos por dos funciones prototype.
*/


/*************
 1. Contructor
 ************/
var SocialNetwork = function (name, arrayLikes, importance, numberOfUsers) {
  this.name = name;
  this.arrayLikes = arrayLikes;
  this.importance = importance;
  this.numberOfUsers = numberOfUsers;
};

/*************
 4. Prototypes
 ************/

SocialNetwork.prototype.calcTotalLikes = function () {
  // Sumar this.arrayLikes
  var sum = 0;
  for (var i = 0; i < this.arrayLikes.length; i++) {
    sum += this.arrayLikes[i];
  }
  this.totalLikes = sum;
  console.log("Total calculado de red social" + this.name + " es: " + this.totalLikes);
};
SocialNetwork.prototype.calcAverageLikes = function () {
  this.calcTotalLikes();
  // Media arrayLikes
  this.averageLikes = this.totalLikes / this.arrayLikes.length;
  console.log("Media calculada de red social" + this.name + " es: " + this.averageLikes);
};

/*************
2. Instancias
************/
var facebook = new SocialNetwork('Facebook', [201, 245, 500, 650, 1103, 347], 0.8, 14530);
var instagram = new SocialNetwork('Instagram', [303, 21, 124, 150, 23, 31], 0.6, 230);
var twiter = new SocialNetwork('Twiter', [205, 518, 1123, 4350, 233, 3431], 0.4, 3230);

console.log("Objeto Facebook es: ", facebook);
console.log("Objeto Instagram es: ", instagram);
console.log("Objeto Twiter es: ", twiter);

/*************
 3. Métodos en constructor
 ************/
facebook.calcAverageLikes();
instagram.calcAverageLikes();
twiter.calcAverageLikes();
