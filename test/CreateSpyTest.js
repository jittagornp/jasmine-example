/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.CreateSpyTest', function () {

    var mySpy;

    beforeEach(function () {
        mySpy = jasmine.createSpy('pamarin');
        mySpy('java', 'sql', 'html');
    });

    it('is named, which helps in error reporting', function () {
        expect(mySpy.and.identity()).toBe('pamarin');
    });

    it('tracks all the arguments of its calls', function () {
        expect(mySpy).toHaveBeenCalledWith('java', 'sql', 'html');
    });
});