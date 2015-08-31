/**
 * @author jittagornp
 * create 29/08/2015
 */
describe('example.CallsAllArgsTest', function () {

    var obj = {
        setName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'setName');
    });

    it('tracks the arguments of each call', function () {
        obj.setName(1);
        obj.setName(10, 20);
        obj.setName(100, 200, 300);

        expect(obj.setName.calls.allArgs()).toEqual([
            [1],
            [10, 20],
            [100, 200, 300]
        ]);
    });

});