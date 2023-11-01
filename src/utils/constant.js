exports.dbTables = {
  ROLES_TABLE: 'aergov_roles',
  USER_ROLES_TABLE: 'aergov_user_roles',
  USERS_TABLE: `aergov_users`,
};

exports.successResponses = {
  TOKEN_DATA_FETCHED: `Token data fetched successfully`,
  HEALTH_CHECK_SUCCESS: `Health check passed`,
};

exports.errorResponses = {
  SOMETHING_WENT_WRONG: `Something went wrong`,
  ACCESS_DENIED: `Access denied`,
  INVALID_CSV_FILE: `Invalid csv file`,
};

exports.permissions = {
  LIST_USER: `USERS_MANAGEMENT#USERS_TAB#TAB_LIST_VIEW`,
  ADD_USER: `USERS_MANAGEMENT#USERS_TAB#ADD_USER`,
  EDIT_USER: `USERS_MANAGEMENT#USERS_TAB#EDIT_USER`,
  LIST_ROLES: `USERS_MANAGEMENT#ROLES_TAB#TAB_LIST_VIEW`,
  ADD_ROLE: `USERS_MANAGEMENT#ROLES_TAB#ADD_ROLE`,
  EDIT_ROLE: `USERS_MANAGEMENT#ROLES_TAB#EDIT_ROLE`,
  DELETE_ROLE: `USERS_MANAGEMENT#ROLES_TAB#DELETE_ROLE`,
  VIEW_LIST_CAR_TYPES: `DEVICES_MANAGEMENT#CAR_TAB#TAB_LIST_VIEW`,
  VIEW_LIST_CAR: `DEVICES_MANAGEMENT#CAR_TAB#TAB_LIST_VIEW`,
  ADD_CAR: `DEVICES_MANAGEMENT#CAR_TAB#ADD_CAR`,
  EDIT_CAR: `DEVICES_MANAGEMENT#CAR_TAB#EDIT_CAR`,
  DELETE_CAR: `DEVICES_MANAGEMENT#CAR_TAB#DELETE_CAR`,
  VIEW_PERSONALITY_PRIVILEGES: `DEVICES_MANAGEMENT#MANAGE_PRIVILEGES#VIEW_PRIVILEGES`,
  ADD_PRIVILEGES_TO_PERSONALITY: `DEVICES_MANAGEMENT#MANAGE_PRIVILEGES#ADD_PRIVILEGES`,
  EDIT_PERSONALITY_PRIVILEGES: `DEVICES_MANAGEMENT#MANAGE_PRIVILEGES#EDIT_PRIVILEGES`,
  VIEW_LIST_INVENTORY: `INVENTORY_MANAGEMENT#TAB_LIST_VIEW`,
  IMPORT_CSV: `INVENTORY_MANAGEMENT#IMPORT_CSV`,
  CSV_IMPORT_HISTORY: `INVENTORY_MANAGEMENT#IMPORT_HISTORY`,
  VIEW_LIST_DISTRIBUTIONS: `DISTRIBUTIONS_MANAGEMENT#TAB_LIST_VIEW`,
  ADD_DISTRIBUTION: `DISTRIBUTIONS_MANAGEMENT#ADD_DISTRIBUTION`,
  EDIT_DISTRIBUTION: `DISTRIBUTIONS_MANAGEMENT#EDIT_DISTRIBUTION`,
  ASSIGN_DEVICES: `DISTRIBUTIONS_MANAGEMENT#ASSIGN_DEVICES`,
  UNASSIGN_DEVICES: `DISTRIBUTIONS_MANAGEMENT#UNASSIGN_DEVICES`,
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
