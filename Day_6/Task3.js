
const first = (arr, n = 0) => {
    if (n >=arr.length) return arr;
    else if (n == 0) return arr[n];
    ans_arr = []
    for(let i = 0; i<n; i++){
        ans_arr.push(arr[i])
    }
    return ans_arr
}

console.log("First:", first([7, 9, 0, -2]));
console.log("First:", first([],3));
console.log("First:", first([7, 9, 0, -2],3));
console.log("First:", first([7, 9, 0, -2],6));
console.log("First:", first([7, 9, 0, -2],-3));