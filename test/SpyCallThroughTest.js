/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.SpyCallThroughTest', function () {

    var obj = {
        getName: function () {
            
        }
    };

    beforeEach(function () {
        spyOn(obj, 'getName').and.callThrough();
    });
    
    it('obj.getName() should not be called', function () {
        expect(obj.getName).not.toHaveBeenCalled();
    });

    it('obj.getName() should be called', function () {
        obj.getName();
        expect(obj.getName).toHaveBeenCalled();
    });
});