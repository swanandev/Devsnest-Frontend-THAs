/**
 * Code to Populate and colour grid!
 */

const gridClass = document.querySelector('.grid');


const onList = [150, 151, 169, 170, 171, 172, 188, 189, 190, 191, 192, 193, 
    207, 208, 210, 211, 213, 214, 227, 228, 229, 230, 231, 232, 233, 234, 
    249, 252, 268, 270, 271, 273, 287, 289, 292, 294]


//const onList = [127, 146, 147, 165, 167, 152, 132, 191, 192, 193, 194, 187, 207, 227,245, 246, 247, 248, 249]

for (let i=0; i < 400; i++){
    let pix = document.createElement('div');
    pix.setAttribute('class','pix');
    pix.setAttribute('id', (i+1));
    pix.addEventListener('click',() => {
        pix.classList.toggle('selected');
    });
    gridClass.appendChild(pix);
}


for (let inx in onList){
    document.getElementById(onList[inx]+'').classList.toggle('selected')
}