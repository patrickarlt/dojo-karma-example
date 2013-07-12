module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // setup the karma runner
    karma: {
      // a in development set of tests to run when files change
      dev: {
        configFile: 'karma.conf.js',

        // watch for changes in source files and rerun tests
        autoWatch: true,

        // output test coverage in the console
        coverageReporter: {
          type: "text",
          dir : 'coverage/'
        }
      },

      // a less frequent test that build also outputs html coverage
      build: {
        configFile: 'karma.conf.js',

        // run once and quit
        singleRun: true,

        // output html coverage files
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

};