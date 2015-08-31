/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.CreateSpyObjectTest', function(){
    
    var user;
    
    beforeEach(function(){
        user = jasmine.createSpyObj('user', [
            'setUsername',
            'setAge',
            'getName',
            'getPassword'
        ]); 
        
        user.setUsername('jittagornp');
        user.setAge(26);
        user.getName();
    });
    
    it('creates spies for each requested function', function(){
        expect(user.setUsername).toBeDefined();
        expect(user.setAge).toBeDefined();
        expect(user.getName).toBeDefined();
        expect(user.getPassword).toBeDefined();
    });
    
    it('tracks that the spies were called', function(){
        expect(user.setUsername).toHaveBeenCalled();
        expect(user.setAge).toHaveBeenCalled();
        expect(user.getName).toHaveBeenCalled();
        
        expect(user.getPassword).not.toHaveBeenCalled();
    });
});