const EasyRBAC = require('easy-rbac');
const rbacConfig = require('./rbac.config');
let rbac = new EasyRBAC(rbacConfig);

const {
  sequelize,
} = require('../../services/aerpace-ecosystem-backend-db/src/databases/postgresql/models'); // Import your Sequelize roles model

const { errorResponses, dbTables } = require('../../utils/constant');
const { errorResponse } = require('../../utils/responseHandler');
const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');

const fetchRoleNameOfUserQuery = `
  SELECT ar.role_name
  FROM ${dbTables.USERS_TABLE} as au
  LEFT JOIN ${dbTables.USER_ROLES_TABLE} as aur ON aur.user_id = au.id
  LEFT JOIN ${dbTables.ROLES_TABLE} as ar ON ar.id = aur.role_id
  WHERE au.id = :user_id
`;

exports.updateRBAC = async () => {
  try {
    await rbacConfig();
    rbac = new EasyRBAC(rbacConfig);
  } catch (err) {
    logger.error(err.message);
    return err;
  }
};

exports.checkUserPermissionsAny =
  (apiPermissions) => async (req, res, next) => {
    try {
      const roleFetch = await sequelize.query(fetchRoleNameOfUserQuery, {
        replacements: { user_id: req.claims.userId },
        raw: true,
      });

      const role = roleFetch[0][0].role_name;
      // To check whether the user or admin has the required permission
      let hasPermission = false;

      for (let apiPermission of apiPermissions) {
        hasPermission = await rbac.can(role, apiPermission);
        if (hasPermission) {
          break;
        }
      }

      if (!hasPermission) {
        return errorResponse({
          req,
          res,
          message: errorResponses.ACCESS_DENIED,
          code: statusCodes.STATUS_CODE_FORBIDDEN,
        });
      }

      next();
    } catch (err) {
      logger.error(err.message);
      return errorResponse({
        req,
        res,
        message: errorResponses.ACCESS_DENIED,
        code: statusCodes.STATUS_CODE_FORBIDDEN,
      });
    }
  };
