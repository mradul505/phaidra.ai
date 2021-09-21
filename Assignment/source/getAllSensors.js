const makeTree = require ('./makeTree.js')

let equipmentSensorTree = makeTree();


//console.log(equipmentSensorTree);

function getAllSensors(equipmentId, startTime, endTime){
    let result = [];
    equipmentSensorTree[equipmentId].Children.map((value) => {
        let resObj={};
        if((value.start_time > startTime && value.start_time<endTime) || 
            (value.start_time < startTime && value.end_time<endTime && value.endTime>startTime ) ||
            (value.start_time < endTime && value.end_time>startTime )){
            resObj.id = value._id;
            if(value.start_time>startTime){
                resObj.start_time = value.start_time;
            }
            else{
                resObj.start_time =startTime;
            }
            if(value.end_time<endTime){
                resObj.end_time = value.end_time;
            }
            else{
                resObj.end_time = endTime;
            }
            result.push(resObj);
        }
    });
    return result;
}

module.exports = getAllSensors;