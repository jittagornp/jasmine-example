/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.CallsAllTest', function () {

    var obj = {
        setName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'setName');
    });

    it('can provide the context and arguments to all calls', function () {
        obj.setName('jittagornp1');
        obj.setName('jittagornp2');

        expect(obj.setName.calls.all()).toEqual([
            {
                object: obj,
                args: ['jittagornp1'],
                returnValue: undefined
            },
            {
                object: obj,
                args: ['jittagornp2'],
                returnValue: undefined
            }
        ]);
    });

});