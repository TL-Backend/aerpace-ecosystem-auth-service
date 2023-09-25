const jwt = require('jsonwebtoken');
const { logger } = require('../../utils/logger');
const { errorResponse } = require('../../utils/responseHandler');
const {
  errorResponses,
  successResponses,
  tokenTypes,
} = require('../../utils/constant');
const { statusCodes } = require('../../utils/statusCode');

exports.verifyToken = (idToken) => {
  try {
    const tokenData = jwt.verify(idToken, process.env.SECURITY_KEY);

    if (tokenData?.token_type !== tokenTypes.ID_TOKEN) {
      return {
        success: false,
        data: tokenData,
        message: errorResponses.INVALID_TOKEN_TYPE,
        errorCode: statusCodes.STATUS_CODE_FORBIDDEN,
      };
    }

    return {
      success: true,
      data: tokenData,
      message: successResponses.TOKEN_DATA_FETCHED,
    };
  } catch (err) {
    logger.error(err);

    if (err instanceof jwt.TokenExpiredError) {
      return {
        success: false,
        data: {},
        message: errorResponses.TOKEN_EXPIRED,
        errorCode: statusCodes.STATUS_CODE_UNAUTHORIZED,
      };
    }

    return {
      success: false,
      data: {},
      message: err.message,
      errorCode: statusCodes.STATUS_CODE_FORBIDDEN,
    };
  }
};

exports.verifyIdToken = (req, res, next) => {
  try {
    const idToken = req.headers.authorization
      ? req.headers.authorization
      : req.headers.Authorization;

    if (!idToken) {
      return errorResponse({
        req,
        res,
        message: errorResponses.ID_TOKEN_REQUIRED,
        code: statusCodes.STATUS_CODE_FORBIDDEN,
      });
    }

    const {
      data: tokenData,
      success,
      errorCode,
      message,
    } = this.verifyToken(idToken);

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
      });
    }

    req.claims = {
      userId: tokenData?.user_id,
      userType: tokenData?.user_type,
      roleName: tokenData?.role_name,
      roleId: tokenData?.role_id,
    };

    req.query.userId = tokenData?.user_id;

    next();
  } catch (err) {
    logger.error(err);
    return errorResponse({
      req,
      res,
      message: err.message,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};
