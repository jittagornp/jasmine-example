/**
 * @author jittagornp
 * create 31/08/2015
 */
describe('example.LifeCycleTest', function () {
    
    var clearAllRound;
    var increase;

    beforeAll(function () {
        increase = 0;
    });

    beforeEach(function () {
        clearAllRound = 1;
        increase = increase + 1;
    });

    it('running at 1', function () {
        expect(clearAllRound).toBe(1);
        expect(increase).toBe(1);
    });

    it('running at 2', function () {
        expect(clearAllRound).toBe(1);
        expect(increase).toBe(2);
    });

    it('running at 3', function () {
        expect(clearAllRound).toBe(1);
        expect(increase).toBe(3);
    });

    afterEach(function () {
        clearAllRound = 0;
    });
 
    afterAll(function () {
        increase = 0;
    });
});