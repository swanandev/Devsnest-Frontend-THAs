
const clone_array = original_array => {
    let clone = original_array.map(el => el)
    return clone
}

console.log("Cloned Array:", clone_array([1, 2, 4, 0]));
console.log("Cloned Array:", clone_array([1, 2, [4, 0]]));