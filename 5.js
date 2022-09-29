class Device{
    constructor(turnOn, power){
    this.turnOn = turnOn
    this.power = power
    }
    getPower (){
    return this.power
    }
}

class Lamp extends Device {
    constructor(lightType, turnOn, power){
         super(turnOn, power);
         this.lightType = lightType
    }
}

class Comp extends Device {
     constructor(brand, turnOn, power){
         super(turnOn, power);
         this.ligtType = brand
     }
}

const firstLamp = new Lamp ("white", 1, 13);
const firstComp = new Comp ("IBM", 1, 21);

allPower = firstLamp.turnOn * firstLamp.getPower() + firstComp.turnOn * firstComp.getPower()
console.log (allPower)