// Karma configuration
// Generated on Thu May 30 2013 14:30:23 GMT+0100 (GMT Daylight Time)

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,

  'test/test-config.js',
  'https://ajax.googleapis.com/ajax/libs/dojo/1.9.1/dojo/dojo.js',
  'js/main.js',

  {pattern: 'js/**/*.js', included: false},
  {pattern: 'test/**/*.js', included: false}
];

// list of files to exclude
exclude = [
  'js/config.js',
  'https://ajax.googleapis.com/ajax/libs/dojo/1.9.1/dojo/dojo.js'
];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];

// web server port
port = 9876;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

preprocessors = {
  'js/demo/*.js': 'coverage'
};

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}