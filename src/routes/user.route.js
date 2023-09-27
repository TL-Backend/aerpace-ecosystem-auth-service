const {
  listUsers,
  createUser,
  editUser,
} = require('../controllers/user/user.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.post(
    '/users',
    verifyIdToken,
    checkUserPermissionsAny([permissions.ADD_USER]),
    createUser,
  );
  app.patch(
    '/users/:id',
    verifyIdToken,
    checkUserPermissionsAny([permissions.EDIT_USER]),
    editUser,
  );
  app.get(
    '/users',
    verifyIdToken,
    checkUserPermissionsAny([permissions.LIST_USER]),
    listUsers,
  );
};
