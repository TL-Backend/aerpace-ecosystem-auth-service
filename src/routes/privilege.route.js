const {
  listMasterPrivileges, getDeviceLevelPrivileges, addPersonalityPrivileges,
} = require('../controllers/privilege/privilege.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.get(
    '/privileges',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.VIEW_PERSONALITY_PRIVILEGES,
      permissions.ADD_PRIVILEGES_TO_PERSONALITY,
      permissions.EDIT_PERSONALITY_PRIVILEGES
    ]),
    listMasterPrivileges,
  );
  app.get(
    '/privileges/devices',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.ADD_CAR,
      permissions.EDIT_CAR
    ]),
    getDeviceLevelPrivileges
  )
  app.post(
    '/privileges/personality',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.ADD_PRIVILEGES_TO_PERSONALITY,
      permissions.EDIT_PERSONALITY_PRIVILEGES
    ]),
    addPersonalityPrivileges
  )
};
