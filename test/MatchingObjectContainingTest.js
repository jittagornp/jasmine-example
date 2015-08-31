/**
 * @author jittagornp
 * create 31/08/2015
 */
describe('example.MatchingObjectContainingTest', function () {

    var user;

    beforeEach(function () {
        user = {
            username: 'jittagornp',
            email: 'jittagornp@gmail.com',
            age: 26
        };
    });

    it('matches objects with the expect key/value pairs', function () {
        expect(user).toEqual(jasmine.objectContaining({
            username: 'jittagornp'
        }));

        expect(user).not.toEqual(jasmine.objectContaining({
            username: 'pamarin'
        }));
    });


    describe('when used with a spy', function () {

        it('is useful for comparing arguments', function () {
            var callback = jasmine.createSpy('callback');

            callback({
                username: 'jittagornp'
            });

            expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
                username: 'jittagornp'
            }));
            expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
                age: 26
            }));
        });

    });

});