const cylinder1 = {
    rad: 2.5,
    height: 5,
    getVolume: function(){
        return (3.14 * this.rad ** 2 * this.height)
    },
    getSum: function(a, b){
        return a + b;
    }
}

const cylinder2 = {
    rad: 3,
    height: 8.5
}

console.log(cylinder1.getVolume.call(cylinder2))
console.log(cylinder1.getSum.apply(cylinder2, [2,3]))

const demo = cylinder1.getVolume.bind(cylinder2);
console.log(demo());