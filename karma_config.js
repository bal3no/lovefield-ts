// Karma configuration
// Generated on Sat Oct 22 2016 17:35:31 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'karma-typescript'],

    files: [
      'node_modules/chai/chai.js',
      '**/*.ts'
    ],

    exclude: [
      'demo/**/*.ts',
      'dist/*.ts',
      'external/**/*.ts',
      'node_modules/**/*.ts',
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },

    reporters: ['dots', 'karma-typescript'],

    browsers: ['Chrome_test'],

    customLaunchers: {
      Chrome_test: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },

    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
      exclude: [
        'demo',
        'external',
        'node_modules'
      ],
      reports: {
        'html': 'coverage',
        'lcovonly': 'coverage'
      }
    }
  })
}  // end of module
