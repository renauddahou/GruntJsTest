  grunt.loadNpmTasks('grunt-wiredep');

  grunt.initConfig({
    wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    }
  });
