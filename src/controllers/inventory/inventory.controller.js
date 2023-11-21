const {
  successResponse,
  errorResponse,
} = require('../../utils/responseHandler');

const { statusCodes } = require('../../utils/statusCode');
const { logger } = require('../../utils/logger');
const { getAsync, postAsync } = require('../../APIRequest/request');
const { inventoryUrls } = require('./inventory.url');
const { responseHandler } = require('../../utils/responseHelper');

const inventoryEndPoint = process.env.INVENTORY_URL;

exports.listInventory = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${inventoryEndPoint}/${inventoryUrls.LIST_INVENTORY}`,
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

exports.getImportHistoryList = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await getAsync({
      uri: `${inventoryEndPoint}/${inventoryUrls.LIST_IMPORT_HISTORY}`,
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

exports.importCSV = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${inventoryEndPoint}/${inventoryUrls.IMPORT_CSV}`,
      query: req.query,
      formData: {
        csv_file: {
          value: req.file.buffer,
          options: {
            filename: req.file.originalname,
            contentType: req.file.mimetype,
          },
        },
      },
    });
    return responseHandler({ message, data, success, errorCode, req, res, next })
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      data: {
        response_file_name: null,
        response_file_url: null,
      },
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};
