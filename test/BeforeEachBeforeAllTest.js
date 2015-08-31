/**
 * @author jittagornp
 * create 27/08/2015
 */
describe('example.BeforeEachBeforeAllTest', function(){
    
    var glbalVar;
    var number;
    
    beforeEach(function(){
        number = 1;
    });
    
    beforeAll(function(){
       glbalVar = true; 
    });
    
    it('1. number should be 1 only', function(){
        expect(number).toBe(1);
        number = 0;
    });
    
    it('2. number should be 1 only', function(){
        expect(number).toBe(1);
        number = 0;
    });
    
    it('3. number should be 1 only', function(){
        expect(number).toBe(1);
        number = 0;
    });
    
    it('1. glbalVar should be true', function(){
        expect(glbalVar).toBe(true);
        glbalVar = false;
    });
    
    it('2. glbalVar should be false', function(){
        expect(glbalVar).toBe(false);
    });
});