/**
 * @author jittagornp
 * create 31/08/2015
 */
describe('example.MatcherTest', function(){
    
    it('The \'toMatch\' matcher is for regular expressions', function(){
        
        expect('Hello World').toMatch(/Wor/);
        expect('Hello World').toMatch('Wor');
        expect('Hello World').toMatch(/(world)$/i);
        
    });
    
});