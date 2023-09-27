const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');

const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');
const { getAsync } = require('../../APIRequest/request');
const { inventoryUrls } = require('./inventory.url');

const baseUrl = process.env.INVENTORY_URL;

exports.listInventory = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${baseUrl}/${inventoryUrls.LIST_INVENTORY}`,
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
};

exports.getImportHistoryList = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${baseUrl}/${inventoryUrls.LIST_IMPORT_HISTORY}`,
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
};