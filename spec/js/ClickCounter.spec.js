describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
    });
    describe('countClick() records clicks and ClickCounter can give the clickCount', () => {
        it('countClick() 1 time should result in a clickCount of 1.', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2.', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
        it('Once the clickCount value is the same as the compagnoPrize value, it should be lower by that compagnionPrize ', () => {
            for (var i = 0; i < 100; i++) {
                underTest.countClick();
            }
            expect(underTest.clickCount).toBe(100);
        });
    });
    describe('Clicking Companions:', () => {
        it('ClickCounter should have 0 when new.', () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });
        it('getCompanionCount() shloud be 1 when clickCount is 100', () => {
            for (var i = 0; i < 100; i++) {
                underTest.countClick();
            }
            expect(underTest.getCompanionCount()).toBe(1);
        });
        it('compagnionCount should be 0 when new.', () => {
            expect(underTest.companionCount).toBe(0);
        });
        it('compagnionPrice should be 100 at the begining', () => {
            expect(underTest.companionPrice).toBe(100);
        });
    });
});