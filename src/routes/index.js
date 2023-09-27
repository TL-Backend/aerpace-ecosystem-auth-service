const router = require('express').Router();

require('./sample.route')(router);
require('./inventory.routes')(router);

module.exports = {
  router,
};
