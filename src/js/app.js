class ClickCount {
    constructor() {
        this.clickCount = 300;
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
        this.cumulativeFactor = this.numberOfcompanionClickPerSecond * this.culminationCompounderIncreasingRate;
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


            /*this.numberofcompanionClickPerSecond++;*/

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
            /* this.culminationCompounderIncreasingRate *= 1.2;*/


        } else {
            return;
        }
    }
    companionEffect() {
        setInterval(
            () => {
                cookieHolder.click();
                newGame.clickCount += this.numberofcompanionClickPerSecond;
            }, 1000);
    }

    resetGame() {
        this.clickCount = 0;
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
        this.cumulativeFactor = this.numberOfcompanionClickPerSecond * this.culminationCompounderIncreasingRate;
    }

}




const newGame = new ClickCount();


/***************************************************************************** */
let cookieIsBig = false;
//*Select all the elemet in the page

const username = document.querySelector("#userName");
const usernameEntered = prompt("Please Provide Your Name");
username.innerText = usernameEntered;
const multiplicator = document.querySelector("#multiplicator");
let scoreHolder = document.querySelector("#score");
const picture = document.querySelector("#pic");
const cookieHolder = document.querySelector("#cookie");
const numberOfCompanionPurchased = document.querySelector("#ccompaPur");
const numberOfCompounderPurchased = document.querySelector("#ccompoPur");
const numberOfAvailableCompanion = document.querySelector("#avcompa");
const priceOfCompanion = document.querySelector("#ccompaP");
const numberOfAvailableCompounder = document.querySelector("#avcompo");
const priceOfCompounder = document.querySelector("#ccompoP");
const resetBtn = document.querySelector("#reset");

const purchaseCompanionBtn = document.querySelector("#pCCompa");
const purchaseCompounderBtn = document.querySelector("#pCCompo");





picture.addEventListener("click", function() {


    if (cookieIsBig == false) {
        this.style.transform = "scale(1.2)";


        this.style.transition = "transform 100ms linear";
    } else {
        this.style.transform = "scale(1)";

        this.style.transition = "transform 100ms linear";
    }
    cookieIsBig = !cookieIsBig;

    newGame.countClick();
    scoreHolder.innerText = newGame.clickCount;
    cookieHolder.innerText = newGame.clickCount > 1 ? "Cookies" : "Cookie";
});

updateDom();




function updateDom() {
    scoreHolder.innerText = newGame.clickCount;
    multiplicator.innetText = newGame.cumulativeFactor;


    numberOfCompanionPurchased.innerText = newGame.clickingCompanionPurchased;

    numberOfCompounderPurchased.innerText = newGame.culminationCompounderPurchased;

    numberOfAvailableCompanion.innerText = newGame.getCompanionCount();

    priceOfCompanion.innerText = newGame.companionPrice;

    numberOfAvailableCompounder.innerText = newGame.getCompounderCount();

    priceOfCompounder.innerText = newGame.compounderPrice;

}
resetBtn.addEventListener("click", () => {
    newGame.resetGame();

    updateDom();


});

purchaseCompanionBtn.addEventListener("click", () => {

    newGame.buyClickCompanion();
    updateDom();

});

purchaseCompounderBtn.addEventListener("click", () => {
    newGame.buyClickCompounder();
    updateDom();

});