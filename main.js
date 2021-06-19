/**
 * Code to Populate and colour grid!
 */

const thaGridClass = document.querySelector('.tha-grid');

const createHrefElement = (day_no) => {
    let anchor = document.createElement('a');
    anchor.href = '/Day_' + day_no;
    anchor.innerHTML = "Day "+ day_no;
}

const day_nos = ['1_2', '3', '4', '5', '6', '7', '8', '9'];

for (let i=0; i < day_nos.length; i++){
    let pix = document.createElement('div');
    let text = document.createElement('p');
    text.innerHTML = "Day " + day_nos[i];
    pix.setAttribute('class','pix');
    pix.setAttribute('id', (i+1));
    pix.addEventListener('click',() => {
        //pix.classList.toggle('booked');
        window.location.href = '/Day_' + (day_nos[i]);
    });
    pix.appendChild(text);
    thaGridClass.appendChild(pix);
}

