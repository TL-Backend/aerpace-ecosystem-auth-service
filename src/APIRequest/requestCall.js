const rp = require('request-promise');

exports.sendRequest = async ({
  method,
  headers,
  uri,
  body,
  query,
  json = true,
  form,
  formData
}) => {
  const options = {
    method,
    uri,
    headers,
    body,
    qs: query,
    json,
    form,
    formData
  };
  return rp(options);
};
