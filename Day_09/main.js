/**
 * Code to Populate and colour grid!
 */

const gridClass = document.querySelector('.grid');
const seats = {booked:0, rem:36};
const remSeats = document.getElementById('remaining_seats');
const bookedSeats = document.getElementById('booked_seats');

const setSeats = () => {   
    remSeats.innerHTML = seats.rem + "";
    bookedSeats.innerHTML = seats.booked + "";
}

setSeats();
 


for (let i=0; i < 36; i++){
    let pix = document.createElement('div');
    pix.setAttribute('class','pix');
    pix.setAttribute('id', (i+1));
    pix.addEventListener('click',() => {
        if (!pix.classList.contains('booked')){
            seats.booked += 1
            seats.rem -= 1
        }else{
            seats.booked -= 1
            seats.rem += 1
        }
        pix.classList.toggle('booked');
        setSeats();    
    });
    gridClass.appendChild(pix);
}