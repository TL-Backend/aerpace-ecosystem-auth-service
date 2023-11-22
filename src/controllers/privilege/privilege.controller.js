const { getAsync, patchAsync, postAsync } = require('../../APIRequest/request');
const {
  errorResponse,
  successResponse,
} = require('../../utils/responseHandler');
const { responseHandler } = require('../../utils/responseHelper');
const { privilegeUrl } = require('./privilege.url');

const privilegeEndPoint = process.env.PRIVILEGE_URL;

exports.listMasterPrivileges = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${privilegeEndPoint}`,
      body: req.body,
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

exports.getDeviceLevelPrivileges = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message, data, success, errorCode } = await getAsync({
      uri: `${privilegeEndPoint}/${privilegeUrl.GET_DEVICE_LEVEL_PRIVILEGES}/${id}`,
      body: req.body,
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

exports.addPersonalityPrivileges = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${privilegeEndPoint}/${privilegeUrl.ADD_PRIVILEGES_TO_PERSONALITY}`,
      body: req.body,
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
