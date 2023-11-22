const { postAsync, getAsync, patchAsync } = require('../../APIRequest/request');
const { logger } = require('../../utils/logger');
const {
  errorResponse,
  successResponse,
} = require('../../utils/responseHandler');
const { responseHandler } = require('../../utils/responseHelper');
const { statusCodes } = require('../../utils/statusCode');
const { distributionUrl } = require('./distribution.url');

const distributionEndPoint = process.env.DISTRIBUTION_URL;

exports.addDistribution = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${distributionEndPoint}/${distributionUrl.ADD_DISTRIBUTION}`,
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

exports.editDistribution = async (req, res, next) => {
  try {
    const { id: distributionId } = req.params;
    const { message, data, success, errorCode } = await patchAsync({
      uri: `${distributionEndPoint}/${distributionId}`,
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

exports.listDistribution = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${distributionEndPoint}/${distributionUrl.LIST_DISTRIBUTION}`,
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

exports.assignDistribution = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${distributionEndPoint}/${distributionUrl.ASSIGN_DEVICES}`,
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

exports.unassignDistribution = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${distributionEndPoint}/${distributionUrl.UNASSIGN_DEVICES}`,
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

exports.getDistributionDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message, data, success, errorCode } = await getAsync({
      uri: `${distributionEndPoint}/${id}`,
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
