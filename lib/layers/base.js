var _ = require('underscore');

function BaseLayer (options) {
  this._initOptions(options);
}

BaseLayer.prototype._initOptions = function (options) {
  this.options = _.extend({}, (options || {}));
}

BaseLayer.prototype._mergeOptions = function (options) {
  var _options = _.extend({}, this.options);
  _options = _.extend(_options, (options || {}));

  return _options;
}

module.exports = BaseLayer;
