const data = require('./GET.json');

module.exports = function (request, response) {
  let result = data;
  if(request.query.id) {
    result = data.find(el => el.id.toString() === request.query.id.toString())
  }
  response.json(result);
};
