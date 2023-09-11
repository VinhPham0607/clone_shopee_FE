const data = require('./GET.json');

const sortEnum = {
  relevant: 'relevant',
  newest: 'newest',
  hot_sale: 'hot_sale',
}

module.exports = function (request, response) {
  let result = data;
  if(request.query.search_item) {
    result = result.filter(el => el.name.includes(request.query.search_item));
  }
  if(request.query.sort_by) {
    switch(request.query.sort_by) {
      case sortEnum.relevant: {
        result = result.filter(el => el.name.includes(request.query.search_item));
        break;
      }
      case sortEnum.hot_sale: {
        const sortedBySale = result.slice();
        result = sortedBySale.sort((a,b) => b.sold - a.sold);
        break;
      }
      case sortEnum.newest: {
        const sortedArray = result.slice().sort((a, b) => b.created_at - a.created_at);
        result = sortedArray;
        break;
      }
      default:
        result = result.filter(el => el.name.includes(request.query.search_item));
        break;
    }
  }
  if(request.query.price) {
    if(request.query.price === 'DESC') {
      const sortedBySale = result.slice();
      result = sortedBySale.sort((a,b) => b.price - a.price);
    }
    if(request.query.price === 'ASC') {
      const sortedBySale = result.slice();
      result = sortedBySale.sort((a,b) => a.price - b.price);
    }
  }
  const page = request.query.page || 1;
  const limit = request.query.limit || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedData = result.slice(startIndex, endIndex);
  
  response.json(paginatedData);
};
