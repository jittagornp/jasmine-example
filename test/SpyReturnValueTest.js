/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.SpyReturnValueTest', function () {

    var obj = {
        getName: function () {
            
        }
    };

    beforeEach(function () {
        spyOn(obj, 'getName').and.returnValue('Hello World!');
    });

    it('should be \'Hello World!\'', function () {
        expect(obj.getName()).toBe('Hello World!');
    });
});