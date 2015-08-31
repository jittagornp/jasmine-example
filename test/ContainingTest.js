/**
 * @author jittagornp
 * create 31/08/2015
 */
describe('example.ContainingTest', function () {

    it('The \'toContain\' matcher is for finding an item in an Array', function () {

        var numbers = ['One', 'Two', 'Three'];

        expect(numbers).toContain('One');
        expect(numbers).not.toContain('Four');

    });

});