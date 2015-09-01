/**
 * @author jittagornp
 * create 01/09/2015
 */
describe('example.NullTest', function(){
    
    it('should be null', function(){
        
        expect(null).toBeNull();
        
    });
    
    it('should not be null', function(){
        
        expect(!null).not.toBeNull();
        
    });
    
});