/**
 * @author jittagornp
 * create 01/09/2015
 */
describe('example.ToBeTest', function () {

    it('should be equal === ', function () {

        var number1 = 1;
        var number2 = 1;
        expect(number1).toBe(number2);

    });

    it('should be equal === by reference', function () {

        var object1 = {username: 'jittagornp'};
        var object2 = object1;

        expect(object1).toBe(object2);

    });

    it('should not be equal !== ', function () {

        var object1 = {username: 'jittagornp'};
        var object2 = {username: 'jittagornp'};

        expect(object1).not.toBe(object2);

    });

});