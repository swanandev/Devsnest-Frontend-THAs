
const demo = {
    copyright: "Rolf Weisenfeld",
date: "2021-07-03",
explanation: "You can't walk along the Milky Way. Still, under a dark sky you can explore it. To the eye the pale luminous trail of light arcing through the sky on a dark, moonless night does appear to be a path through the heavens. The glowing celestial band is the faint, collective light of distant stars cut by swaths of obscuring interstellar dust clouds. It lies along the plane of our home galaxy, so named because it looks like a milky way. Since Galileo's time, the Milky Way has been revealed to telescopic skygazers to be filled with congeries of innumerable stars and cosmic wonders.",
hdurl: "https://apod.nasa.gov/apod/image/2107/Walk_Milkyway.jpg",
media_type: "image",
service_version: "v1",
title: "Along the Milky Way",
url: "https://apod.nasa.gov/apod/image/2107/Walk_Milkyway_1024.jpg"
}

const datePicker = document.querySelector('#date-picker');
const fetchButton = document.querySelector('#fetch-bttn');

const apodDp = document.querySelector('#dp');
const apodTitle = document.querySelector('.apod-title');
const apodDate = document.querySelector('.apod-date');
const apodDesc = document.querySelector('.apod-desc');

const months = [null, "January", "February", "March", "April", ]

const dateFormatter = (date = "2021-07-01", opt = 0) => {
    let newDate = new Date(date);
    switch(opt){
        case 0:
            return newDate.toLocaleString('en-IN', {month: 'long', day : "numeric", year:'numeric', weekday: "short"});
        case 1:
            let month = newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
            let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
            return newDate.getFullYear() + "-" + month + "-" + day;
    }
    return date;
}

const compdate = (d1,d2)=>{//Used to Compare Dates d1 is before d2
    if(d1.split("-")[2].valueOf()>=d2.split("-")[2].valueOf()){
        if(d1.split("-")[1].valueOf()<d2.split("-")[1].valueOf() && d1.split("-")[0].valueOf()<=d2.split("-")[0].valueOf()){
            return true;
        }else if(d1.split("-")[1].valueOf()>=d2.split("-")[1].valueOf() && d1.split("-")[0].valueOf()<d2.split("-")[0].valueOf()){
            return true;
        }
    }else{
        if(d1.split("-")[1].valueOf()<=d2.split("-")[1].valueOf() && d1.split("-")[0].valueOf()<=d2.split("-")[0].valueOf()){
            return true;
        }else if(d1.split("-")[1].valueOf()>d2.split("-")[1].valueOf() && d1.split("-")[0].valueOf()<d2.split("-")[0].valueOf()){
            return true;
        }
    }
    return false;
}

const fetchApod = (date) => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + date).then(data => {
        return data.json().then(apod => apod);
    });
}

const loadApod = async (currDate) => {
    // Demo Object for Testing!
    // const apod = {...demo};
    // console.log(currDate);
    // apodDp.src = apod.url;
    // datePicker.value = currDate
    // apodTitle.innerHTML = apod.title;
    // apodDate.innerHTML = "On " + dateFormatter(apod.date);  
    // apodDesc.innerHTML = apod.explanation;

    fetchApod(currDate).then(apod => {
        console.log(currDate);
        apodDp.src = apod.url;
        datePicker.value = currDate
        apodTitle.innerHTML = apod.title;
        apodDate.innerHTML = "On " + dateFormatter(apod.date);  
        apodDesc.innerHTML = apod.explanation;
    })
}

fetchButton.addEventListener('click', () => {
    let tempDate = new Date().toLocaleString('en-IN', {month: "long", day: "2-digit", year: "numeric"});
    if(!compdate(datePicker.value, dateFormatter(tempDate, 1))){
        alert('Please Enter Valid Date!!');
        return;
    }
    loadApod(datePicker.value);
})

loadApod(dateFormatter(new Date().toLocaleString('en-IN', {month: "long", day: "2-digit", year: "numeric"}), 1));