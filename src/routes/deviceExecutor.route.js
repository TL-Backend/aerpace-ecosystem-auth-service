const { deviceExecutor } = require('../controllers/deviceExecutor/deviceExecutor');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');

module.exports = function (app) {
  app.post(
    '/execute',
    verifyIdToken,
    deviceExecutor,
  );
};
