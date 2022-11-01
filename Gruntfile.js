module.exports = function(grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        uglify: {
            t1: {
                files: [
                    {
                        src: ['src/a.js', 'src/b.js'],
                        dest: 'build/ab.min.js'

                    }
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('compressJS','uglify');
};
