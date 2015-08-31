/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.TracksTheContextTest', function () {

    it('tracks the context', function () {
        var spyFunction = jasmine.createSpy('spy');
        
        var user1 = {
            setUsername: spyFunction
        };
        
        var user2 = {
            setUsername: spyFunction
        };
        
        user1.setUsername('jittagornp');
        user2.setUsername('pamarin');

        expect(spyFunction.calls.first().object).toBe(user1);
        expect(spyFunction.calls.mostRecent().object).toBe(user2);
    });

});