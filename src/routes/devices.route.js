const {
  listDevicesTypes,
  getDevicesList,
  getPersonalityDetails,
  editDevices,
  createDeviceLevel,
  getValidHierarchy,
  deviceExecutor,
} = require('../controllers/devices/device.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.get(
    '/devices/types',
    verifyIdToken,
    checkUserPermissionsAny([permissions.VIEW_LIST_CAR_TYPES]),
    listDevicesTypes,
  );
  app.get(
    '/devices/personality',
    verifyIdToken,
    checkUserPermissionsAny([permissions.VIEW_PERSONALITY_PRIVILEGES]),
    getPersonalityDetails,
  );
  app.patch(
    '/devices',
    verifyIdToken,
    checkUserPermissionsAny([permissions.EDIT_CAR]),
    editDevices,
  );
  app.post(
    '/devices/device-level',
    verifyIdToken,
    checkUserPermissionsAny([permissions.ADD_CAR]),
    createDeviceLevel,
  );
  app.get(
    '/devices/:device_type',
    verifyIdToken,
    checkUserPermissionsAny([permissions.VIEW_LIST_CAR]),
    getDevicesList,
  );
  app.get(
    '/devices/device-level/:id',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.VIEW_LIST_CAR,
      permissions.EDIT_CAR,
      permissions.ADD_PRIVILEGES_TO_PERSONALITY,
    ]),
    getValidHierarchy,
  );
  app.post('/devices/execute', verifyIdToken, deviceExecutor);
};
