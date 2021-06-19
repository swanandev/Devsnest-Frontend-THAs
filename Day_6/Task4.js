
const join_array_elements = (arr, del = "") => {
    ans_str = ""
    arr.forEach(element => {
        ans_str += element + del
    });
    if (del !== "") ans_str = ans_str.slice(0, -(del.length));
    return ans_str
}

console.log("Joined Elements:", join_array_elements(["Red", "Green", "White", "Black"],","))
console.log("Joined Elements:", join_array_elements( ["Red", "Green", "White", "Black"],"+"))