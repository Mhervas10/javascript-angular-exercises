/*
 Ejercicio map()
 Supongamos que tenemos una app que guarda un array de tareas (task) del día. Cada tarea es un objeto con los campos: "name" y "duration".
 1. Queremos crear un array con el nombre de las tareas.
*/
var tasks = [
    {
        name: "Programming .map example",
        duration: 120
    },
    {
        name: "Work out",
        duration: 30
    },
    {
        name: "Procrastinate on Netflix",
        duration: 240
    }
];

// Con bucle for
var taskNames = [];
for(var i = 0; i < tasks.length; i++) {
    taskNames.push(tasks[i].name);
}
console.log("Task name with for: ", taskNames);

// Con .forEach
var taskNames = [];
tasks.forEach(function(element){
    taskNames.push(element.name);
});
console.log("Task name with forEach: ", taskNames);

// Con .map
taskNames = tasks.map(function(element){
    return element.name;
});
console.log("Task name with map: ", taskNames);

