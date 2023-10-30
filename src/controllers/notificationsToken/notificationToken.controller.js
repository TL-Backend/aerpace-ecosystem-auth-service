const { postAsync } = require('../../APIRequest/request');
const { logger } = require('../../utils/logger');
const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');
const { statusCodes } = require('../../utils/statusCode');
const { notificationTokenUrls } = require('./notificationToken.url');

const tokenEndpoint = process.env.MOBILE_TOKEN_URL;

exports.addNotificationTokenUrlsToUser = async (req, res, next) => {
  try {
    const userId = req.query.userId;

    const { message, data, success, errorCode } = await postAsync({
      uri: `${tokenEndpoint}/${notificationTokenUrls.ADD_TOKEN({ userId })}`,
      body: req.body,
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
