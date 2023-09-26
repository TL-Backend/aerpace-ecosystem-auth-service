const { methods } = require('../utils/constant');
const { HelperResponse } = require('../utils/helperResponse');
const { logger } = require('../utils/logger');
const { sendRequest } = require('./requestCall');

exports.postAsync = async ({
  headers,
  url,
  body,
  query,
  json = true,
  form,
}) => {
  try {
    const postResponse = await sendRequest({
      method: methods.POST,
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    let response = {
      data: postResponse.data,
      message: postResponse.message,
      code: postResponse.code,
    };

    return new HelperResponse({ success: true, data: response });
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};

exports.getAsync = async ({ headers, uri, body, query, json = true, form }) => {
  try {
    const getResponse = await sendRequest({
      method: methods.GET,
      headers,
      uri,
      body,
      query,
      json,
      form,
    });

    let response = {
      data: getResponse.data,
      message: getResponse.message,
      code: getResponse.code,
    };

    return new HelperResponse({ success: true, data: response });
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};

exports.patchAsync = async ({
  headers,
  url,
  body,
  query,
  json = true,
  form,
}) => {
  try {
    const patchResponse = await sendRequest({
      method: methods.PATCH,
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    let response = {
      data: patchResponse.data,
      message: patchResponse.message,
      code: patchResponse.code,
    };

    return new HelperResponse({ success: true, data: response });
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};

exports.putAsync = async ({ headers, url, body, query, json = true, form }) => {
  try {
    const putResponse = await sendRequest({
      method: methods.PUT,
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    let response = {
      data: putResponse.data,
      message: putResponse.message,
      code: putResponse.code,
    };

    return new HelperResponse({ success: true, data: response });
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};

exports.deleteAsync = async ({
  headers,
  url,
  body,
  query,
  json = true,
  form,
}) => {
  try {
    const deleteResponse = await sendRequest({
      method: methods.DELETE,
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    let response = {
      data: deleteResponse.data,
      message: deleteResponse.message,
      code: deleteResponse.code,
    };

    return new HelperResponse({ success: true, data: response });
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};
