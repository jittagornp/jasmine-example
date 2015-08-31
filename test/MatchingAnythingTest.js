/**
 * @author jittagornp
 * create 30/08/2015
 */
describe('example.MatchingAnythingTest', function () {

    it('matches any value', function () {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });

    describe('when used with a spy', function () {

        it("is useful for comparing arguments", function () {
            var callback = jasmine.createSpy('callback');
            callback(1000, function () {
                return true;
            });

            expect(callback).toHaveBeenCalledWith(
                    jasmine.any(Number),
                    jasmine.any(Function)
                    );
        });

    });

});