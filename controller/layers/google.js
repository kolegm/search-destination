var Searcher = require('search-google-geocode');

function Layer() {}

/**
 * @access public
 */
Layer.prototype.search = function (address, callback, options) {
  Searcher.geocode(address, callback, options);
}

/**
 * @access public
 */
Layer.prototype.reverse = function (lat, lng, callback, options) {
  Searcher.reverseGeocode(lat, lng, callback, options);
}

module.exports = Layer;
