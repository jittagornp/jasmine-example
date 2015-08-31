/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.CallsAnyTest', function () {

    var obj = {
        getName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'getName');
    });

    it('tracks if it was called at all', function () {
        expect(obj.getName.calls.any()).toEqual(false);

        obj.getName();

        expect(obj.getName.calls.any()).toEqual(true);
    });

});