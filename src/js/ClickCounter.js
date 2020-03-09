class ClickCount {
    constructor() {
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
    }

    countClick() {
        this.clickCount++;


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


    }
}