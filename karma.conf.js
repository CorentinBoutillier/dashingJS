module.exports = function(karma){
  karma.set({
    // register the framework (it needs to go before mocha / jasmine)
    frameworks: ['angular', 'mocha'],


    files: [               // no need to enter paths for angular / angular-mocks
      "src/**.js",         // your package.json is scanned and they will be automatically
      "test/**-test.js"    // prepended to this array.
    ],

    browsers: ['Chrome'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  });
};
