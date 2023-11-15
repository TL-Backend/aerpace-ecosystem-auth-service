const { getAsync, patchAsync, postAsync } = require('../../APIRequest/request');
const { logger } = require('../../utils/logger');
const {
  errorResponse,
  successResponse,
} = require('../../utils/responseHandler');
const { statusCodes } = require('../../utils/statusCode');
const { deviceUrl } = require('./device.url');

const deviceEndPoint = process.env.DEVICE_URL;
const deviceExecutorEndPoint = process.env.DEVICE_EXECUTOR_URL

const responseHandler = ({ message, data, success, errorCode, req, res, next }) => {
  if (!success) {
    return errorResponse({
      req,
      res,
      message,
      code: errorCode,
      data: data?.data,
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
}

exports.listDevicesTypes = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${deviceUrl.LIST_DEVICE_TYPES}`,
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

exports.getDevicesList = async (req, res, next) => {
  try {
    const { device_type } = req.params;
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${device_type}`,
      body: req.body,
      params: req.query,
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

exports.getPersonalityDetails = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${deviceUrl.GET_PERSONALITY_DETAILS}`,
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

exports.editDevices = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await patchAsync({
      uri: `${deviceEndPoint}`,
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

exports.createDeviceLevel = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${deviceEndPoint}/${deviceUrl.ADD_DEVICE_LEVEL}`,
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

exports.getValidHierarchy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${deviceUrl.GET_DEVICE_HIERARCHY}/${id}`,
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

exports.deviceExecutor = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${deviceExecutorEndPoint}/${deviceUrl.EXECUTE}`,
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
