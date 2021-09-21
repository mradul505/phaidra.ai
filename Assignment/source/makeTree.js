const data = require('../config/data.json');

//Storing equipment-sensor mapping in the form of an object tree

function makeTree(){
    let equipmentSensorTree={};
    [data.EquipmentsMapping].map((item)=>{
        for (const [key, value] of Object.entries(item)) {
            let equipmentNode = {};
            value.forEach((sensor)=>{
                let sensorNode = {...sensor};
                sensorNode.Parent = key;
                sensorNode.Children = [];
                if(!equipmentNode.Children){
                    equipmentNode.Children = [];
                }
                equipmentNode.Children.push({...sensorNode});
                equipmentSensorTree[key] = {...equipmentNode};
            })
        }
    });
    return equipmentSensorTree;
}

module.exports = makeTree;
