let hourHand = document.querySelector('.hour-hand');
let minHand = document.querySelector('.minute-hand');
let secsHand = document.querySelector('.seconds-hand');
//alert(hourHand, minHand, secsHand)


//Function to rotate hands

const rotate = () => {
    const currentDate = new Date();

    const hrs = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const secs = currentDate.getSeconds();

    const secondsFraction = secs / 60;
    const minutesFraction = (secondsFraction + mins) / 60;
    const hoursFraction = (minutesFraction + hrs) / 12;

    const secondsRotate = secondsFraction * 360;
    const minutesRotate = minutesFraction * 360;
    const hoursRotate = hoursFraction * 360;
    
    secsHand.style.transform = `rotate(${secondsRotate}deg)`;
    minHand.style.transform = `rotate(${minutesRotate}deg)`;
    hourHand.style.transform = `rotate(${hoursRotate}deg)`;

    console.log(secondsRotate, minutesRotate, hoursRotate)
}

setInterval(rotate, 1000);