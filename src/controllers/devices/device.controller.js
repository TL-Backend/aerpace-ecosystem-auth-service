const { getAsync, patchAsync, postAsync } = require('../../APIRequest/request');
const {
  errorResponse,
  successResponse,
} = require('../../utils/responseHandler');
const { deviceUrl } = require('./device.url');

const deviceEndPoint = process.env.DEVICE_URL;

exports.listDevicesTypes = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${deviceUrl.LIST_DEVICE_TYPES}`,
      body: req.body,
      query: req.query,
    });

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
    console.log(`${deviceEndPoint}/${deviceUrl.GET_DEVICES_LIST}`);
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${deviceUrl.GET_DEVICES_LIST}`,
      body: req.body,
      query: req.query,
    });

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
    console.log(`${deviceEndPoint}/${deviceUrl.GET_DEVICES_LIST}`);
    const { message, data, success, errorCode } = await getAsync({
      uri: `${deviceEndPoint}/${deviceUrl.GET_PERSONALITY_DETAILS}`,
      body: req.body,
      query: req.query,
    });

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
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};
