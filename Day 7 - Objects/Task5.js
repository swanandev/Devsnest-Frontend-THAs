/**
 * Program to get Volume of Cylinder
 */

let cylinders = [
    {
        rad: 2.5,
        height: 5
    },
    {
        rad: 4,
        height: 2.5
    },
    {
        rad: 3,
        height: 6
    },
    {
        rad: 2,
        height: 5.4
    }
]

const PI = 3.14;

for (let ckey in cylinders){
    let cylinder = cylinders[ckey];
    console.log("\nFor Cylinder ",ckey + 1);
    console.log("\tRadius: ", cylinder.rad);
    console.log("\tHeight: ", cylinder.height);
    console.log("\tVolume: ", 
        Math.round((PI * Math.pow(cylinder.rad, 2) * cylinder.height) 
        * 10000 ) / 10000,"\n");
};