/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.SpyThrowErrorTest', function () {

    var obj = {
        getName: function () {

        }
    };

    beforeEach(function () {
        spyOn(obj, 'getName').and.throwError('name not found error');
    });

    it('should be throw error \'name not found error\'', function () {
        expect(function(){
            obj.getName();
        }).toThrowError('name not found error');
    }); 
});