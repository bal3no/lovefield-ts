module.exports = function(config) {
  var customLaunchers = {
    sl_chrome_mac: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'macOS 10.15',
      version: '91.0'
    }
  };

  config.set({
    frameworks: ['mocha', 'karma-typescript'],
    singleRun: true,

    files: [
      'node_modules/chai/chai.js',
      '**/*.ts'
    ],

    exclude: [
      'demo/**/*.ts',
      'dist/*.ts',
      'external/**',
      'node_modules/**/*.ts'
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },

    reporters: ['dots', 'saucelabs', 'karma-typescript'],
    port: 9876,
    colors: true,

    browsers: Object.keys(customLaunchers),

    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
      exclude: [
        'demo',
        'external',
        'node_modules'
      ]
    },

    concurrency: 1,

    sauceLabs: {
      testName: 'Lovefield TypeScript Port',
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false,
      recordScreenshots: false,
      public: 'public'
    },

    client: {
      mocha: {
        timeout: 10000
      }
    },

    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 20000,
    captureTimeout: 0,
    customLaunchers: customLaunchers
  })
}  // end of module
