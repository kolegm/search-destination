var Searcher = require('search-geonames');

function Layer() {}

/**
 * @access public
 */
Layer.prototype.search = function (address, callback, options) {
  Searcher.wikiSearchByQuery(address, callback, options);
}

/**
 * @access public
 */
Layer.prototype.reverse = function (lat, lng, callback, options) {
  Searcher.wikiFindNearBy(lat, lng, callback, options);
}

module.exports = Layer;
