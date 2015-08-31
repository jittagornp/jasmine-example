module.exports = function (grunt) {

    grunt.initConfig({
        /**/
        pkg: grunt.file.readJSON('package.json'),
        /* Test */
        jasmine: {
            src: [
                /* */
            ],
            options: {
                specs: 'test/*.js'
            }
        },
        /* What's done?, when js file changed */
        watch: {
            app: {
                files: [
                    'test/*.js'
                ],
                tasks: [
                    'jasmine'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'jasmine'
    ]);
};