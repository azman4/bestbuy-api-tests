const Logger = require('../utilities/logger');

const framework = 'custom';
const frameworkPath = require.resolve('protractor-cucumber-framework');
const specs = ['../feature_files/*.feature'];

const capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--disable-extensions', '-no-sandbox'],
  },
  metadata: {
    browser: {
      name: 'chrome',
      version: '92.0',
    },
    device: 'MacBook Pro 13',
    platform: {
      name: 'OSX',
      version: '10.14.6',
    },
  }
};

const onPrepare = () => {
  Logger.info('Starting the test execution');
  browser.manage().window().maximize();
};

const onComplete = () => {
  Logger.info('Test execution is completed!');
};

exports.config = {
  framework,
  frameworkPath,
  specs,
  directConnect: true,
  capabilities,
  cucumberOpts: {
    require: [
      '../step_definitions/*.js',
    ],
    format: `json:./reports/results.json`,
    tags: ['@BestBuyE2E'],
    profile: false,
    'no-source': true,
    strict: true,
  },
  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options: {
      openReportInBrowser: true,
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      reportName: 'BestBuy - Test Summary Report',
      pageFooter: 'Cucumber Automation',
      pageTitle: 'E2E Automation Execution Report',
      displayDuration: true,
    },
  }],
  getPageTimeout: 50000,
  allScriptsTimeout: 50000,
  onPrepare,
  onComplete
};
