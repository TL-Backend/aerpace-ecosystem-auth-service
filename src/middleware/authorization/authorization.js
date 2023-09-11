const EasyRBAC = require('easy-rbac');
const rbacConfig = require('./rbac.config');
const rbac = new EasyRBAC(rbacConfig);
const {
  sequelize,
} = require('../../services/aerpace-ecosystem-backend-db/src/databases/postgresql/models'); // Import your Sequelize roles model

const { dbTables, errorResponses } = require('../../utils/constant');
const { errorResponse } = require('../../utils/responseHandler');
const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');

exports.checkUserPermission = (apiPermission) => async (req, res, next) => {
  try {
    const userId = req.userId;

    const userRoles = await sequelize.query(`
      SELECT ar.role_name, aur.user_id, aur.role_id
      FROM ${dbTables.USER_ROLES_TABLE} AS aur
        LEFT JOIN ${dbTables.ROLES_TABLE} AS ar ON ar.id = aur.role_id
      WHERE aur.user_id = '${userId}'
  `);

    const role = userRoles[0][0].role_name;

    // To check whether the user or admin has the required permission
    const hasPermission = await rbac.can(role, apiPermission);

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
