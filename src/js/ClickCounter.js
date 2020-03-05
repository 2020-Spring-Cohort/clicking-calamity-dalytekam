/*class ClickCount {
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
        this.numberofcompanionClickPerSecond = 1;
        this.culminationCompounderIncreasingRate = 1;
        this.cumulativeFactor = this.numberofcompanionClickPerSecond * this.culminationCompounderIncreasingRate;
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
            this.companionPrice = this.companionPrice * this.companionPriceIncreasingRate;
            this.companionCount--;
            this.clickingCompanionPurchased += 1;

            this.companionEffect();
            this.numberofcompanionClickPerSecond++;

        } else {
            return;
        }
    }

    buyClickCompounder() {
        if (this.getCompounderCount() > 0) {
            this.clickCount = this.clickCount - this.compounderPrice;
            this.compounderPrice = this.compounderPrice * this.compounderPriceIncreasingRate;
            this.compounderCount--;
            this.culminationCompounderPurchased += 1;
            this.culminationCompounderIncreasingRate *= 1.2;
            this.companionEffect();

        } else {
            return;
        }
    }
    companionEffect() {
        setInterval(() => {
            this.clickCount += this.clickCount + this.cumulativeFactor;
        }, 100 ms);
    }

}*/