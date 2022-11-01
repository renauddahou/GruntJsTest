module.exports = function(grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: 'const b = "in all targets"; '
            },
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
            },
            t2: {
                options: {
                    banner: 'const b = "<%= package.version %>"; '
                },
                files: [
                    {
                        src: 'src/*.js',
                        dest: 'build/<%= package.name %>.min.js'
                    }
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('compressJS','uglify');
    grunt.registerTask('compressABC','uglify:t2');
};
