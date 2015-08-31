/**
 * @author jittagornp
 * create 28/08/2015
 */
describe('example.SpyStubTest', function () {

    var obj;

    beforeEach(function () {
        obj = {
            name: 'jittagornp',
            setName: function (name) {
                this.name = name;
            }
        };

        spyOn(obj, 'setName').and.callThrough();
    });

    it('should be \'Pamarin\'', function () {
        obj.setName('Pamarin');
        expect(obj.name).toBe('Pamarin');
    });

    it('should be \'jittagornp\'', function () {
        obj.setName.and.stub();
        obj.setName('Pamarin');
        expect(obj.name).toBe('jittagornp');
    });
});