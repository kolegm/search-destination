var _ = require('underscore');

var EventEmitter = require('events').EventEmitter;

EventEmitter.prototype.act = function (message, callback) {
  message = (message || '').toString();
  if (!message) message = 'The search process in action.';

  if (_.isFunction(callback)) {
    callback(message);
  //} else if (_.contains(['dev', 'development'], process.env.NODE_ENV)) {
  } else {
    console.log(message);
  }
}

var eventEmitter = new EventEmitter();

eventEmitter.on('begin', function (callback) {
  var message = 'The search process is running.';
  this.act(message, callback);
});

eventEmitter.on('progress', function (callback) {
  var message = 'The search process in progress.';
  this.act(message, callback);
});

eventEmitter.on('receive', function (callback) {
  var message = 'The search process received result.';
  this.act(message, callback);
});

eventEmitter.on('end', function (callback) {
  var message = 'The search process finished.';
  this.act(message, callback);
});

eventEmitter.on('failure', function (callback) {
  var message = 'The search process failured.';
  this.act(message, callback);
});

module.exports = eventEmitter;
