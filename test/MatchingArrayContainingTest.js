/**
 * @author jittagornp
 * create 01/09/2015
 */
describe('example.MatchingArrayContainingTest', function () {

    var numbers;

    beforeEach(function () {
        numbers = [1, 10, 100, 1000];
    });

    it('matches arrays with some of the values', function () {
        expect(numbers).toEqual(jasmine.arrayContaining([
            1,
            10
        ]));

        expect(numbers).not.toEqual(jasmine.arrayContaining([
            5,
            50
        ]));
    });


    describe('when used with a spy', function () { 

        it('is useful when comparing arguments', function () {
            var callback = jasmine.createSpy('callback');

            callback([1, 10, 100, 1000]);

            expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([
                1,
                10
            ]));

            expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([
                5,
                50
            ]));
        });

    });

});