

const performOperation = (option) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    //alert(num1)
    if (isNaN(num1)){
        alert("Enter Valid Num1");
        return;
    }
    if (isNaN(num2)){
        alert("Enter Valid Num2");
        return;
    }
    let ans = NaN
    switch(option){
        case 1:
            ans = num1 + num2;
            break;
        
        case 2:
            ans = num1 - num2;
            break;
        
        case 3:
            ans = num1 * num2;
            break;
        
        case 4:
            ans = Math.round(num1 / num2 * 100) / 100
            break;
    }
    const ans_div = document.getElementById('ans')
    ans_div.innerHTML = ans
    const odivs = document.getElementsByClassName('output-div')
    odivs.item(0).style.visibility = 'visible';
}