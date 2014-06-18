module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: {
        src: [ '*.js' ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
