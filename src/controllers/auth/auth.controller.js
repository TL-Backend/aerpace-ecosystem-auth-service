const { postAsync } = require("../../APIRequest/request");
const { logger } = require("../../utils/logger");
const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');
const { statusCodes } = require('../../utils/statusCode');
const { authUrls } = require('./auth.url');

exports.login = async (req, res, next) => {
  try {
    const baseUrl = process.env.AUTH_URL;
    const { message, data, success, errorCode } = await postAsync({
      uri: `${baseUrl}/${authUrls.LOGIN}`,
      body: req.body,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data: data?.data
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
}

exports.forgotPassword = async (req, res, next) => {
  try {
    const baseUrl = process.env.AUTH_URL;
    const { message, data, success, errorCode } = await postAsync({
      uri: `${baseUrl}/${authUrls.FORGOT_PASSWORD}`,
      body: req.body,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data: data?.data
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
}

exports.temporaryPasswordReset = async (req, res, next) => {
  try {
    const baseUrl = process.env.AUTH_URL;

    const { message, data, success, errorCode } = await postAsync({
      uri: `${baseUrl}/${authUrls.TEMPORARY_PASSWORD_REST}`,
      body: req.body,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data: data?.data
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
}

exports.resetPassword = async (req, res, next) => {
  try {
    const baseUrl = process.env.AUTH_URL;
    const { uuid } = req.params;
    const { message, data, success, errorCode } = await postAsync({
      uri: `${baseUrl}/${authUrls.RESET_PASSWORD}/${uuid}`,
      body: req.body,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data: data?.data
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
}

exports.getAccessTokenWithRefresh = async (req, res, next) => {
  try {
    const baseUrl = process.env.AUTH_URL;

    const { message, data, success, errorCode } = await postAsync({
      uri: `${baseUrl}/${authUrls.REFRESH_TOKEN}`,
      body: req.body,
      query: req.query,
    });

    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data: data?.data
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
    logger.error(err);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
}