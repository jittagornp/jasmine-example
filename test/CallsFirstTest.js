/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.CallsFirstTest', function () {

    var obj = {
        setName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'setName');
    });

    it('has a shortcut to the first call', function () {
        obj.setName('jittagornp1');
        obj.setName('jittagornp2');
        obj.setName('jittagornp3');

        expect(obj.setName.calls.first()).toEqual({
            object: obj, 
            args: ['jittagornp1'],
            returnValue: undefined
        });
    });
});