//Div Button sections of entities
const divVeh = document.querySelector('.vehicle_Entity');
const divAir = document.querySelector('.aircraft_Entity');
const divLife = document.querySelector('.lifeform_Entity');

const iconFrontAddress = 'img/mapicons/';
const btnTag = "_button";

//Parent Class
class EntityClass{
    constructor(entityName, entityType){
        this.entityName = entityName
        this.entityType = entityType
        
    }
    getType(){
        switch(this.entityType){
            case "vehicle":
                console.log("I am of type  vehicle")
                break;
            case "aircraft":
                console.log("I am of type   aircraft")
                break;
            case "lifeform":
                console.log("I am of type  lifeform")
                break;
        }

    }
}
//Inherits from parent class
class VehicleEntity extends EntityClass{
    constructor(entityName){

        super(entityName);

        this.entityType = "vehicle"
    }
    drive(){
        console.log(this.entityName + " Driving")
    }
}
//Inherits from parent class
class AircraftEntity extends EntityClass{
    constructor(entityName){

        super(entityName);

        this.entityType = "aircraft"
    }
    fly(){
        console.log(this.entityName + " Flying")
    }
}
//Inherits from parent class
class LifeformEntity extends EntityClass{
    constructor(entityName){

        super(entityName);

        this.entityType = "lifeform"
    }
    live(){
        console.log(this.entityName + " Living")
    }
}
//OBJ Array to store all entities
let arrMyOBJ = [];
//creation of new Objects
//Vehicles
const landrover = new VehicleEntity("landrover");
landrover.drive();
//Aircrafts
const boeing = new AircraftEntity("boeing");
boeing.fly();
const f22raptor = new AircraftEntity("f22raptor");
//LifeFroms
const gunner = new LifeformEntity("gunner");
gunner.live();
const soldier = new LifeformEntity("soldier");

//Inserts OBJs into Array, sorts type, creates button & Icon
arrMyOBJ.push(landrover,boeing,gunner,soldier,f22raptor);
for(i = 0; i < arrMyOBJ.length; i++){
    groupEntitys(arrMyOBJ[i]);
    createEntityIcon(arrMyOBJ[i]);

}

//sort object to place buttons in correct Divs
function groupEntitys(_Entity){
    switch(_Entity.entityType){
        case "vehicle":
            divVeh.innerHTML += `<button id="${_Entity.entityName}_button">${_Entity.entityName}<br></button>`
        break;

        case "aircraft":
            divAir.innerHTML += `<br><button id="${_Entity.entityName}_button">${_Entity.entityName}<br></button>`
        break;

        case "lifeform":
            divLife.innerHTML += `<button id="${_Entity.entityName}_button">${_Entity.entityName}<br></button>`
        break;
    }
}

function createEntityIcon(_Entity){
    //Get name of entity | Follows Naming Standard
    const name = _Entity.entityName;
    //Varible to store Icon Address
    let iconAddressResult = iconFrontAddress+name+".svg"
    //Combines Address

    //Debug
    // console.log("iconAddressResult = "+iconAddressResult);

    const htmlElement = document.getElementById(name+ btnTag)
    const imgElement = document.createElement('object')
    
    const fallbackImg = document.createElement('img')
    
    fallbackImg.src = "img/mapicons/default.svg"

    imgElement.data = iconAddressResult
  
    imgElement.append(fallbackImg)
    htmlElement.append(imgElement)

    return iconAddressResult;  
}