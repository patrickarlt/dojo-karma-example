module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      watch: {
        configFile: 'karma.conf.js'
      },
      coverage: {
        configFile: 'karma.conf.js',
        singleRun: true,
        preprocessors:{
          'js/**/*.js': 'coverage'
        },
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma:watch']);

};