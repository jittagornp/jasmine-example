/**
 * @author jittagornp
 * create 01/09/2015
 */
describe('example.BooleanTest', function () {

    it('should be true', function () {

        expect(!null).toBe(true);

    });

    it('should be false', function () {

        expect(!!null).toBe(false);

    });

});