'use strict';

const Pino = require('pino');

const Logger = Pino({
  prettyPrint: {
    colorize: false,
    translateTime: true,
  },
  level: 'debug',
  useLevelLabels: true,
  timestamp: true,
  base: null
});

module.exports = Logger;
