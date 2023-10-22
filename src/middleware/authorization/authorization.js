const EasyRBAC = require('easy-rbac');
const rbacConfig = require('./rbac.config');
let rbac = new EasyRBAC(rbacConfig);

const {
  sequelize,
} = require('../../services/aerpace-ecosystem-backend-db/src/databases/postgresql/models'); // Import your Sequelize roles model

const { errorResponses } = require('../../utils/constant');
const { errorResponse } = require('../../utils/responseHandler');
const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');

exports.updateRBAC = async () => {
  try {

    await rbacConfig();
    rbac = new EasyRBAC(rbacConfig);

  } catch (err) {
    logger.error(err.message);
    return err;
  }
}

exports.checkUserPermissionsAny =
  (apiPermissions) => async (req, res, next) => {
    try {
      const role = req.claims.roleName;

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
