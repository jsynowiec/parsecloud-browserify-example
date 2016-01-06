var md5 = require('md5');

module.exports = function (request, response) {
  response.success({ md5: md5(request.params.input) });
};
