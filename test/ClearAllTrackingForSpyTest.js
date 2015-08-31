/**
 * @author jittagornp
 * create 30/08/2015 
 */
describe('example.ClearAllTrackingForSpyTest', function () {

    var obj = {
        setName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'setName').and.callThrough(); 
    });

    it('can be reset', function () {
        
        expect(obj.setName.calls.any()).toBe(false);
        
        obj.setName('jittagornp');

        expect(obj.setName.calls.any()).toBe(true);

        obj.setName.calls.reset();

        expect(obj.setName.calls.any()).toBe(false);

    });

});