/*

To execute the code, type 'node main.js' in console!!

*/

const is_array = val => {
    return val instanceof Array
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

