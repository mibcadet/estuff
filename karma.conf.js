// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const PLUGINS = [
  'karma-jasmine',
  'karma-chrome-launcher',
  'karma-jasmine-html-reporter',
  'karma-coverage-istanbul-reporter',
  '@angular-devkit/build-angular/plugins/karma'
];

function setConfiguration(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: PLUGINS.map(plugin => require(plugin)),
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
}

module.exports = function (config) {
  setConfiguration(config);
};
