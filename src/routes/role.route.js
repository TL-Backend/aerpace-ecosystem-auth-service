const {
  listRoles,
  createRole,
  deleteRole,
  editRole,
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
      permissions.EDIT_ROLE,
      permissions.DELETE_ROLE,  
    ]),
    listRoles,
  );
  app.post(
    '/roles',
    verifyIdToken,
    checkUserPermissionsAny([permissions.ADD_ROLE]),
    createRole,
  );
  app.delete(
    '/roles/:id',
    verifyIdToken,
    checkUserPermissionsAny([permissions.DELETE_ROLE]),
    deleteRole,
  );
  app.patch(
    '/roles/:id',
    verifyIdToken,
    checkUserPermissionsAny([permissions.EDIT_ROLE]),
    editRole,
  );
};
