module.exports = function(grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        uglify: {
            t1: {
                files: [
                    {
                        src: ['src/a.js', 'src/b.js'],
                        dest: 'build/ab.min.js'

                    },
                    {
                        src: ['src/a.js', 'src/c.js'],
                        dest: 'build/ac.min.js'

                    }
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('compressJS','uglify');
};
