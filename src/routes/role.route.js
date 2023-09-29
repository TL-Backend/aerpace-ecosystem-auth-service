const {
  listRoles,
  createRole,
} = require('../controllers/role/role.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.get(
    '/roles',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.ADD_ROLE,
      permissions.LIST_ROLES,
      permissions.ADD_USER,
      permissions.EDIT_USER,
    ]),
    listRoles,
  );
  app.post(
    '/roles',
    verifyIdToken,
    checkUserPermissionsAny([permissions.ADD_ROLE]),
    createRole,
  );
};
