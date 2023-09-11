const { sampleTest } = require('../controllers/sample/sample.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermission,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.get(
    '/sample',
    verifyIdToken,
    checkUserPermission(permissions.SAMPLE),
    sampleTest,
  );
};
