const router = require('express').Router();

require('./sample.route')(router);
require('./inventory.routes')(router);
require('./role.route')(router);
require('./auth.route')(router);
require('./user.route')(router);
require('./distribution.route')(router);
require('./notificationToken.route')(router);
require('./devices.route')(router);
require('./privilege.route')(router);
require('./notificationToken.route')(router);
require('./deviceExecutor.route')(router);

module.exports = {
  router,
};
