/**
 * @author jittagornp
 * create 31/08/2015 
 */
describe('example.ThrowErrorTest', function(){
    
    var user;
    
    beforeEach(function(){
        user = {
          
            setUsername : function(){
                
            },
            
            setPassword : function(){
                throw new Error('Unsupported operation');
            }
        };
    });
    
     it('should not be throw error', function(){
        expect(user.setUsername).not.toThrowError();
    });
    
    it('should be throw error \'Unsupported operation\'', function(){
        expect(user.setPassword).toThrowError('Unsupported operation');
    });
     
});