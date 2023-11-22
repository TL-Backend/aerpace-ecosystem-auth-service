const { getAsync, postAsync, patchAsync } = require('../../APIRequest/request');
const { logger } = require('../../utils/logger');
const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');
const { responseHandler } = require('../../utils/responseHelper');

const { userUrls } = require('./user.url');

const userEndPoint = process.env.USERS_URL;

exports.listUsers = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${userEndPoint}/${userUrls.LIST_USER}`,
      query: req.query,
      headers: req.headers,
    });
    return responseHandler({ message, data, success, errorCode, req, res, next })
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${userEndPoint}/${userUrls.ADD_USER}`,
      query: req.query,
      body: req.body,
    });

    return responseHandler({ message, data, success, errorCode, req, res, next })
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message, data, success, errorCode } = await patchAsync({
      uri: `${userEndPoint}/${userUrls.ADD_USER}/${id}`,
      query: req.query,
      body: req.body,
    });
    return responseHandler({ message, data, success, errorCode, req, res, next })
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};

exports.getConfig = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${userEndPoint}/${userUrls.CONFIG}`,
      query: req.query,
    });
    return responseHandler({ message, data, success, errorCode, req, res, next })
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};
