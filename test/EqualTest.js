/**
 * @author jittagornp
 * create 01/09/2015
 */
describe('example.EqualTest', function () {

    it('should be equal == ', function () {

        var object1 = {username: 'jittagornp'};
        var object2 = {username: 'jittagornp'};

        expect(object1).toEqual(object2);

    });

});