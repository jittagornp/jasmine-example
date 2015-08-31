/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.CallsArgsForTest', function () {

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

        expect(obj.setName.calls.argsFor(0)).toEqual([1]);
        expect(obj.setName.calls.argsFor(1)).toEqual([10, 20]);
        expect(obj.setName.calls.argsFor(2)).toEqual([100, 200, 300]);
    });

});