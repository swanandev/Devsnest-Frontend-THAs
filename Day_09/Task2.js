const mH = document.getElementById('mouse-hover')

const exDiv = document.getElementById('ex-div')

exDiv.addEventListener('mousemove', (e) => {
    mH.innerHTML = "X: " + e.clientX + "\nY: " + e.clientY;
})

exDiv.addEventListener('click', (e) => {
    alert("Please Don't Click again! :(");
})

exDiv.addEventListener('mouseleave', (e) => {
    mH.innerHTML = "Over the Hills & out of the area!";
})

document.addEventListener("keypress", (e) => {
    alert(e.key);
})