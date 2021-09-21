const getAllSensors = require('./getAllSensors');


let startTime = "10:30";
let endTime = "19:15";
let equipmentId = "Equipment2"
console.log(getAllSensors(equipmentId,startTime,endTime));
