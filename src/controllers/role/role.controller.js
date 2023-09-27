const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');

const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');
const { getAsync, postAsync } = require('../../APIRequest/request');
const { roleUrls } = require('./role.url');

exports.listRoles = async (req, res, next) => {
  try {
    const baseUrl = process.env.ROLES_URL;

    const { message, data, success, errorCode } = await getAsync({
      uri: `${baseUrl}/${roleUrls.LIST_ROLES}`,
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.createRole = async (req, res, next) => {
  try {
    const baseUrl = process.env.ROLES_URL;

    const { message, data, success, errorCode } = await postAsync({
      uri: `${baseUrl}/${roleUrls.LIST_ROLES}`,
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};
