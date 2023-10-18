const {
  addDistribution,
  listDistribution,
  editDistribution,
  assignDistribution,
  unassignDistribution,
  getDistributionDetails,
} = require('../controllers/distribution/distribution.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.post(
    '/distribution',
    verifyIdToken,
    checkUserPermissionsAny([permissions.ADD_DISTRIBUTION]),
    addDistribution,
  );
  app.get(
    '/distribution',
    verifyIdToken,
    checkUserPermissionsAny([permissions.VIEW_LIST_DISTRIBUTIONS]),
    listDistribution,
  );
  app.patch(
    '/distribution/:id',
    verifyIdToken,
    checkUserPermissionsAny([permissions.EDIT_DISTRIBUTION]),
    editDistribution,
  );
  app.post(
    '/distribution/assign',
    verifyIdToken,
    checkUserPermissionsAny([permissions.ASSIGN_DEVICES]),
    assignDistribution,
  );
  app.post(
    '/distribution/unassign',
    verifyIdToken,
    checkUserPermissionsAny([permissions.UNASSIGN_DEVICES]),
    unassignDistribution,
  );
  app.get(
    '/distribution/:id',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.ASSIGN_DEVICES,
      permissions.UNASSIGN_DEVICES,
      permissions.EDIT_DISTRIBUTION,
    ]),
    getDistributionDetails,
  );
};
