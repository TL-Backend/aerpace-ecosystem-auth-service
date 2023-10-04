const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');

const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');
const { getAsync } = require('../../APIRequest/request');
const { sampleUrls } = require('./sample.url');
const { successResponses, errorResponses } = require('../../utils/constant');

exports.sampleTestUsers = async (req, res, next) => {
  try {
    const baseUrl = process.env.USERS_URL;

    const { message, data, success } = await getAsync({
      uri: `${baseUrl}/${sampleUrls.SAMPLE}`,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: statusCodes.STATUS_CODE_FAILURE,
      });
    }

    const {
      message: responseMessage,
      data: responseData,
      code: responseCode,
    } = data;

    logger.info('success');
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

exports.healthCheck = async (req, res, next) => {
  try {
    logger.info('Health check success');
    return successResponse({
      data: {},
      req,
      res,
      message: successResponses.HEALTH_CHECK_SUCCESS,
      code: statusCodes.STATUS_CODE_SUCCESS,
    });
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
      message: errorResponses.SOMETHING_WENT_WRONG,
    });
  }
};
