'use strict';
const logger = require('../index').getLogger('log', __filename, process.pid);

process.env.LOGGER_LINE = true;
logger.level = 'debug';
logger.info('test1');
logger.warn('test2');
logger.error('test3');