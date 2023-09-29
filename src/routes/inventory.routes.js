const {
  listInventory,
  getImportHistoryList,
  importCSV,
} = require('../controllers/inventory/inventory.controller');
const {
  importCsvMiddleware,
  importCsvValidation,
} = require('../controllers/inventory/inventory.middleware');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');
const {
  checkUserPermissionsAny,
} = require('../middleware/authorization/authorization');
const { permissions } = require('../utils/constant');

module.exports = function (app) {
  app.get(
    '/inventory',
    verifyIdToken,
    checkUserPermissionsAny([
      permissions.VIEW_LIST_INVENTORY,
      permissions.ASSIGN_DEVICES,
      permissions.UNASSIGN_DEVICES,
    ]),
    listInventory,
  );
  app.get(
    '/inventory/csv-history',
    verifyIdToken,
    checkUserPermissionsAny([permissions.CSV_IMPORT_HISTORY]),
    getImportHistoryList,
  );
  app.post(
    '/inventory/csv',
    verifyIdToken,
    checkUserPermissionsAny([permissions.IMPORT_CSV]),
    importCsvMiddleware,
    importCsvValidation,
    importCSV,
  );
};
