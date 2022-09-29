function Device(turnOn){
  this.turnOn = turnOn
}
Device.prototype.getPower = function(power){
  return power
}
function Lamp (turnOn, ligtType){
   this.turnOn = turnOn
   this.ligtType = ligtType
}
Lamp.prototype = new Device()
const firstLamp = new Lamp (1, "white" );

function Comp (turnOn, brand){
   this.turnOn = turnOn
   this.brand = brand
}
Comp.prototype = new Device()

const firstComp = new Comp (1, "IBM" );


allPower = firstLamp.turnOn * firstLamp.getPower(12) + firstComp.turnOn * firstComp.getPower(22)

console.log (allPower)