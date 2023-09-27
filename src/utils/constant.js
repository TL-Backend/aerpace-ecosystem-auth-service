exports.dbTables = {
  ROLES_TABLE: 'aergov_roles',
  USER_ROLES_TABLE: 'aergov_user_roles',
};

exports.successResponses = {
  TOKEN_DATA_FETCHED: `Token data fetched successfully`,
};

exports.errorResponses = {
  ACCESS_DENIED: `Access denied`,
  ID_TOKEN_REQUIRED: `Id token is required`,
  INVALID_TOKEN_TYPE: `Invalid token type`,
  TOKEN_EXPIRED: `Token expired`,
  JWT_EXPIRED: `jwt expired`,
};

exports.permissions = {
  VIEW_LIST_INVENTORY: `INVENTORY#INVENTORY_TAB#TAB_LIST_VIEW`,
  ASSIGN_DEVICES: `DISTRIBUTIONS#DISTRIBUTIONS_TAB#ASSIGN_DEVICES`,
  UNASSIGN_DEVICES: `DISTRIBUTIONS#DISTRIBUTIONS_TAB#UNASSIGN_DEVICES`,
  CSV_IMPORT_HISTORY: `INVENTORY#INVENTORY_TAB#IMPORT_HISTORY`,
  IMPORT_CSV: `INVENTORY#INVENTORY_TAB#IMPORT_CSV`,
};

exports.tokenTypes = {
  ID_TOKEN: `ID_TOKEN`,
  REFRESH_TOKEN: `REFRESH_TOKEN`,
};

exports.methods = {
  POST: `POST`,
  GET: `GET`,
  PATCH: `PATCH`,
  PUT: `PUT`,
  DELETE: `DELETE`,
};
