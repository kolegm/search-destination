var util = require('util');
var Searcher = require('search-google-geocode');
var BaseLayer = require('./base');

function Layer(options) {
  BaseLayer.call(this, options);
}

util.inherits(Layer, BaseLayer);

/**
 * @access public
 */
Layer.prototype.search = function (address, callback, options) {
  Searcher.geocode(
    address,
    callback,
    this._mergeOptions(options)
  );
}

/**
 * @access public
 */
Layer.prototype.reverse = function (lat, lng, callback, options) {
  Searcher.reverseGeocode(
    lat,
    lng,
    callback,
    this._mergeOptions(options)
  );
}

module.exports = Layer;
