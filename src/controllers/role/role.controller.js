const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');

const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');
const {
  getAsync,
  postAsync,
  patchAsync,
  deleteAsync,
} = require('../../APIRequest/request');
const { roleUrls } = require('./role.url');

const rbacConfig = require('../../middleware/authorization/rbac.config');

const rolesEndPoint = process.env.ROLES_URL;

exports.listRoles = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${rolesEndPoint}/${roleUrls.LIST_ROLES}`,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data,
      });
    }

    const {
      message: responseMessage,
      data: responseData,
      code: responseCode,
    } = data;

    return successResponse({
      data: responseData,
      req,
      res,
      message: responseMessage,
      code: responseCode,
    });
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.createRole = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${rolesEndPoint}/${roleUrls.LIST_ROLES}`,
      body: req.body,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data,
      });
    }

    const {
      message: responseMessage,
      data: responseData,
      code: responseCode,
    } = data;

    return successResponse({
      data: responseData,
      req,
      res,
      message: responseMessage,
      code: responseCode,
    });
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.editRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message, data, success, errorCode } = await patchAsync({
      uri: `${rolesEndPoint}/${roleUrls.EDIT_ROLES({ id })}`,
      body: req.body,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data,
      });
    }

    const {
      message: responseMessage,
      data: responseData,
      code: responseCode,
    } = data;

    await rbacConfig();

    return successResponse({
      data: responseData,
      req,
      res,
      message: responseMessage,
      code: responseCode,
    });
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.deleteRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message, data, success, errorCode } = await deleteAsync({
      uri: `${rolesEndPoint}/${roleUrls.DELETE_ROLES({ id })}`,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data,
      });
    }

    const {
      message: responseMessage,
      data: responseData,
      code: responseCode,
    } = data;

    await rbacConfig();

    return successResponse({
      data: responseData,
      req,
      res,
      message: responseMessage,
      code: responseCode,
    });
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};
