/**
 * @author jittagornp
 * create 01/09/2015 
 */
describe('example.StringMatchingTest', function () {

    it('matches as a regexp', function () {
        expect({username: 'jittagornp'}).toEqual({username: jasmine.stringMatching(/^jittagornp$/)});
        expect({username: 'pamarin'}).toEqual({username: jasmine.stringMatching('mar')});
    });

    describe('when used with a spy', function () {
        
        it('is useful for comparing argument', function () {
            var callback = jasmine.createSpy('callback');

            callback('computer');

            expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('computer'));
            expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^com$/));
        });
        
    });

});