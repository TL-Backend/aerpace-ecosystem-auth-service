exports.dbTables = {
  ROLES_TABLE: 'aergov_roles',
  USER_ROLES_TABLE: 'aergov_user_roles',
};

exports.successResponses = {
  TOKEN_DATA_FETCHED:  `Token data fetched successfully`
}

exports.errorResponses = {
  ACCESS_DENIED: `Access denied`,
  ID_TOKEN_REQUIRED: `Id token is required`,
  INVALID_TOKEN_TYPE: `Invalid token type`,
  TOKEN_EXPIRED: `Token expired`,
  JWT_EXPIRED: `jwt expired`
}


exports.permissions = {
  SAMPLE: `SAMPLE`
}


exports.tokenTypes = {
  ID_TOKEN: `ID_TOKEN`,
  REFRESH_TOKEN: `REFRESH_TOKEN`,
};