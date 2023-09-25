const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');

const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');
const { getAsync } = require('../../APIRequest/request');
const { sampleUrls } = require('./sample.url');

exports.sampleTest = async (req, res, next) => {
  try {
    const baseUrl = process.env.USERS_URL;

    const { message, code, data } = await getAsync({
      uri: `${baseUrl}/${sampleUrls.SAMPLE}`,
      query: req.query,
    });

    logger.info('success');
    return successResponse({
      data,
      req,
      res,
      message,
      code,
    });
  } catch (err) {
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
      error: err,
    });
  }
};
