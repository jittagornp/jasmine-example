/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.SpyReturnValuesTest', function () {

    var obj = {
        getName: function () {
            
        }
    };

    beforeEach(function () {
        spyOn(obj, 'getName').and.returnValues(1, 2, 3, 4, 5);
    });

    it('should be 1, 2, 3, 4, 5, undefined', function () {
        expect(obj.getName()).toBe(1);
        expect(obj.getName()).toBe(2);
        expect(obj.getName()).toBe(3);
        expect(obj.getName()).toBe(4);
        expect(obj.getName()).toBe(5);
        expect(obj.getName()).toBeUndefined();
    });
});