
const get_max_freq = arr => {
    freq = {}
    arr.forEach(element => {
        if (freq[element] === undefined) freq[element] = 1
        else freq[element] += 1
    });
    max_f = -1
    max_key = undefined
    for(f in freq){
       if (freq[f] > max_f) {
           max_f = freq[f];
           max_key = f
        } 
    }
    return max_key
}

console.log("Max Occuring Element :", get_max_freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))