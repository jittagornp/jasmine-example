/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.TracksTheArgumentsTest', function(){
    
    var obj = {
      
        setNumbers : function(){
            
        }
    };
    
    beforeEach(function(){
        spyOn(obj, 'setNumbers');
    });
    
    it('1. tracks all the arguments of its calls', function(){
        obj.setNumbers(1, 2, 3);
        expect(obj.setNumbers).toHaveBeenCalledWith(1, 2, 3);
    });
    
    it('2. tracks all the arguments of its calls', function(){
        obj.setNumbers(10, 20);
        expect(obj.setNumbers).toHaveBeenCalledWith(10, 20);
    });
});