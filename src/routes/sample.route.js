const { sampleTest } = require('../controllers/sample/sample.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.get(
    '/sample',
    verifyIdToken,
    checkUserPermissionsAny([permissions.SAMPLE]),
    sampleTest,
  );
};
