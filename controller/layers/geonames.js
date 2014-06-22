var Searcher = require('search-geonames');

function Layer() {}

/**
 * @access public
 */
Layer.prototype.search = function (address, callback, options) {
  Searcher.searchByQuery(address, callback, options);
}

/**
 * @access public
 */
Layer.prototype.reverse = function (lat, lng, callback, options) {
  Searcher.findNearBy(lat, lng, callback, options);
}

module.exports = Layer;
