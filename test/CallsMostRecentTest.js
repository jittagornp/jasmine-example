/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.CallsMostRecentTest', function () {

    var obj = {
        setName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'setName');
    });

    it('has a shortcut to the most recent call', function () {
        obj.setName('jittagornp1');
        obj.setName('jittagornp2');
        obj.setName('jittagornp3');

        expect(obj.setName.calls.mostRecent()).toEqual({
            object: obj,
            args: ['jittagornp3'],
            returnValue: undefined
        });
    });
});