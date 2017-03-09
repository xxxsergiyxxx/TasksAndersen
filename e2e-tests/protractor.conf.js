//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.ts'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
