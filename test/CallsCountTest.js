/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.CallsCountTest', function () {

    var obj = {
        getName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'getName');
    });

    it('tracks the number of times it was called', function () {
        expect(obj.getName.calls.count()).toEqual(0);

        obj.getName();
        obj.getName();
        obj.getName();

        expect(obj.getName.calls.count()).toEqual(3);
    });

});