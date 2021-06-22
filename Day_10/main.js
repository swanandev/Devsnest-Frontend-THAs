
const inGame = document.querySelector('.in-game');
const gameOver = document.querySelector('.game-over');

const cardHolderClass = document.querySelector('.card-holder');
const numOfMatches = document.getElementById('num-matches');

const numOfCards = 6;

const availableCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let matches = 0;
let firstChoice;
const matched = [];

const img_map = {};

const getBackroungImage = (name, width = '250', height = '200') => {
    let img = document.createElement('img');
    img.src = './imgs/'+ name;
    img.width = width;
    img.height = height;
    return img;
}

const isGameOver = () => {
    return matched.length == (numOfCards * 2);
}

const endGame = () => {
    setTimeout(() => {
            
        inGame.classList.toggle('hidden');
        gameOver.classList.toggle('hidden');
    }, 1000);
}

for (let i = 1; i< (numOfCards) + 1; i++){
    let currentCard = availableCards[getRandomInt(availableCards.length)];
    let currentCardInx = availableCards.indexOf(currentCard);
    availableCards.splice(currentCardInx, 1);

    let pairCard = availableCards[getRandomInt(availableCards.length)];
    let pairCardInx = availableCards.indexOf(pairCard);
    availableCards.splice(pairCardInx, 1);

    img_map[currentCard] = i + '.jpg';
    img_map[pairCard] = i + '.jpg';
}

const flip = (card) => {
    if (matched.indexOf(card.getAttribute('id')) != -1) return;
    if (firstChoice){
        if (card.getAttribute('id') == firstChoice.getAttribute('id')) return;
        card.firstChild.classList.toggle('do-flip');
        setTimeout(() => {
            let cardId = card.getAttribute('id');
            let firstChoiceId = firstChoice.getAttribute('id');

            if (img_map[cardId] == img_map[firstChoiceId]){
                console.log("Matched!");
                matched.push(...[cardId, firstChoiceId]);
                let ovImg = getBackroungImage('ball.png');
                ovImg.classList.add('ball');
                card.firstChild.firstChild.replaceChild(ovImg, card.firstChild.firstChild.firstChild);
                //console.log(card.firstChild.firstChild.firstChild);
                ovImg = getBackroungImage('ball.png');
                ovImg.classList.add('ball');
                firstChoice.firstChild.firstChild.replaceChild(ovImg, firstChoice.firstChild.firstChild.firstChild);
                card.firstChild.classList.toggle('do-flip');
                firstChoice.firstChild.classList.toggle('do-flip');
                numOfMatches.innerHTML = (matched.length / 2);
                if (isGameOver()) endGame();
            }else{
                console.log("F");
                card.firstChild.classList.toggle('do-flip');
                firstChoice.firstChild.classList.toggle('do-flip');
            }
            firstChoice = undefined;
        }, 1000);
    }else{
        firstChoice = card;
        card.firstChild.classList.toggle('do-flip');
    }
}

const createCard = (inx) => {
    //Creating Front View
    let frontDiv = document.createElement('div');
    let unknownPlayer = getBackroungImage('player.png', '158', '192');
    unknownPlayer.classList.add('unknown');

    frontDiv.appendChild(unknownPlayer);
    frontDiv.setAttribute('class', 'card-front');

    //Creating Rear View
    let backDiv = document.createElement('div');
    backDiv.appendChild(getBackroungImage(img_map[inx]));
    backDiv.setAttribute('class', 'card-back');

    //Creating Inner Card-Content and attaching views
    let cardInner = document.createElement('div');
    cardInner.setAttribute('class', 'card-inner');
    cardInner.appendChild(frontDiv);
    cardInner.appendChild(backDiv);

    //Creating Main Card View & attaching Inner View
    let card = document.createElement('div');
    card.appendChild(cardInner);
    card.setAttribute('class','card');
    card.setAttribute('id', (inx));
    card.addEventListener('click', () => {flip(card)});
    return card;
}

for (let i = 1; i <= numOfCards * 2; i++){
    let card = createCard(i);
    cardHolderClass.appendChild(card);
}