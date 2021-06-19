/**
 * Program to get Volume of Cylinder
 */

const PI = 3.14;

function Cylinder(rad, height){
    this.rad = rad;
    this.height = height;
}

Cylinder.prototype.getVolume = function(){
    return Math.round((PI * Math.pow(this.rad, 2) * this.height)).toFixed(4);
}


let cylinder = new Cylinder(4, 2.5);
console.log("Radius: ", cylinder.rad);
console.log("Height: ", cylinder.height);
console.log("\nVolume: ", cylinder.getVolume(),"\n");