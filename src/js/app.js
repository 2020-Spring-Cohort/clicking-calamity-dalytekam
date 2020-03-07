class ClickCount {
    constructor() {
        this.clickCount = 700;
        this.companionCount = 0;
        this.compounderCount = 0;
        this.companionPrice = 100;
        this.compounderPrice = 10;
        this.clickingCompanionPurchased = 0;
        this.culminationCompounderPurchased = 0;
        this.companionPriceIncreasingRate = 0.1;
        this.compounderPriceIncreasingRate = 0.1;
        this.numberOfcompanionClickPerSecond = 1;
        this.culminationCompounderIncreasingRate = 1;
    }

    countClick() {
        this.clickCount++;

        updateDom();
    }
    getCompanionCount() {
        this.companionCount = Math.floor(this.clickCount / this.companionPrice);
        return this.companionCount;
    }
    getCompounderCount() {
        this.compounderCount = Math.floor(this.clickCount / this.compounderPrice);
        return this.compounderCount;
    }

    buyClickCompanion() {
        if (this.getCompanionCount() > 0) {
            this.clickCount = this.clickCount - this.companionPrice;
            this.companionPrice += this.companionPrice * this.companionPriceIncreasingRate;
            this.getCompanionCount();
            this.clickingCompanionPurchased += 1;
            this.numberOfcompanionClickPerSecond += 1;
        } else {
            return;
        }
    }

    buyClickCompounder() {
        if (this.getCompounderCount() > 0) {
            this.clickCount = this.clickCount - this.compounderPrice;
            this.compounderPrice += this.compounderPrice * this.compounderPriceIncreasingRate;
            this.getCompounderCount();
            this.culminationCompounderPurchased += 1;
            this.culminationCompounderIncreasingRate *= 1.2;
        } else {
            return;
        }
    }

    resetGame() {
        this.clickCount = 400;
        this.companionCount = 0;
        this.compounderCount = 0;
        this.companionPrice = 100;
        this.compounderPrice = 10;
        this.clickingCompanionPurchased = 0;
        this.culminationCompounderPurchased = 0;
        this.companionPriceIncreasingRate = 0.1;
        this.compounderPriceIncreasingRate = 0.1;
        this.numberOfcompanionClickPerSecond = 1;
        this.culminationCompounderIncreasingRate = 1;

        musicel3.play();
        updateDom();
    }
}

const newGame = new ClickCount();

/***************************************************************************** */
let autoclickIsActive = false;
let cookieIsBig = false;
let gameloop;

//*Select all the elemet in the page

const username = document.querySelector('#userName');
const usernameEntered = prompt('Please Provide Your Name');
username.innerText = usernameEntered;
const mul = document.querySelector('#multiplicator');
let scoreHolder = document.querySelector('#score');
const picture = document.querySelector('#pic');
const cookieHolder = document.querySelector('#cookie');
const numberOfCompanionPurchased = document.querySelector('#ccompaPur');
const numberOfCompounderPurchased = document.querySelector('#ccompoPur');
const numberOfAvailableCompanion = document.querySelector('#avcompa');
const priceOfCompanion = document.querySelector('#ccompaP');
const numberOfAvailableCompounder = document.querySelector('#avcompo');
const priceOfCompounder = document.querySelector('#ccompoP');
const resetBtn = document.querySelector('#reset');
const purchaseCompanionBtn = document.querySelector('#pCCompa');
const purchaseCompounderBtn = document.querySelector('#pCCompo');
const musicel = document.querySelector('#music');
const musicel2 = document.querySelector('#music2');
const musicel3 = document.querySelector('#music3');



updateDom();
console.log(newGame.numberOfcompanionClickPerSecond);

function animateCookie() {
    if (cookieIsBig == false) {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 100ms linear';
    } else {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 100ms linear';
    }
    cookieIsBig = !cookieIsBig;
    newGame.countClick();
    musicel.play();
    cookieHolder.innerText = newGame.clickCount > 1 ? 'Cookies' : 'Cookie';
}

function companionEffect() {
    gameloop = setInterval(() => {
        newGame.clickCount += newGame.numberOfcompanionClickPerSecond * newGame.culminationCompounderIncreasingRate;
        scoreHolder.innerText = newGame.clickCount.toFixed(2);
        updateDom();
    }, 1000);
}

function updateDom() {
    scoreHolder.innerText = newGame.clickCount.toFixed(2);
    mul.innerText = (newGame.numberOfcompanionClickPerSecond * newGame.culminationCompounderIncreasingRate).toFixed(2);
    numberOfCompanionPurchased.innerText = newGame.clickingCompanionPurchased;
    numberOfCompounderPurchased.innerText = newGame.culminationCompounderPurchased;
    numberOfAvailableCompanion.innerText = newGame.getCompanionCount();
    priceOfCompanion.innerText = newGame.companionPrice.toFixed(2);
    numberOfAvailableCompounder.innerText = newGame.getCompounderCount();
    priceOfCompounder.innerText = newGame.compounderPrice.toFixed(2);
}

resetBtn.addEventListener('click', () => {
    newGame.resetGame();
    autoclickIsActive = false;
    clearInterval(gameloop);
    updateDom();
});

purchaseCompanionBtn.addEventListener('click', () => {
    if (autoclickIsActive == false) {
        autoclickIsActive = true;
        companionEffect();
        musicel2.play();
        newGame.buyClickCompanion();
        updateDom();
    } else {
        musicel2.play();
        newGame.buyClickCompanion();
        updateDom();
    }
});

purchaseCompounderBtn.addEventListener('click', () => {
    if (autoclickIsActive == false) {
        autoclickIsActive = true;
        companionEffect();
        musicel2.play();
        newGame.buyClickCompounder();
        updateDom();
    } else {
        musicel2.play();
        newGame.buyClickCompounder();
        updateDom();
    }

});
picture.addEventListener('click', animateCookie);