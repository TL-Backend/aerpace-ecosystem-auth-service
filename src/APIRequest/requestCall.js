const rp = require('request-promise');

exports.sendRequest = async ({
  method,
  headers,
  uri,
  body,
  query,
  json = true,
  form,
}) => {
  const options = {
    method,
    uri,
    headers,
    body,
    qs: query,
    json,
    form,
  };
  return rp(options);
};
