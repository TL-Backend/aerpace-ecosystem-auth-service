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
      method: 'POST',
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    return {
      data: postResponse.data,
      message: postResponse.message,
      code: postResponse.code,
    };
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};

exports.getAsync = async ({ headers, uri, body, query, json = true, form }) => {
  try {
    const getResponse = await sendRequest({
      method: 'GET',
      headers,
      uri,
      body,
      query,
      json,
      form,
    });

    return {
      data: getResponse.data,
      message: getResponse.message,
      code: getResponse.code,
    };
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
      method: 'PATCH',
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    return {
      data: patchResponse.data,
      message: patchResponse.message,
      code: patchResponse.code,
    };
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
      method: 'DELETE',
      headers,
      url,
      body,
      query,
      json,
      form,
    });

    return {
      data: deleteResponse.data,
      message: deleteResponse.message,
      code: deleteResponse.code,
    };
  } catch (err) {
    logger.error(err);
    return new HelperResponse({ success: false, message: err.message });
  }
};
