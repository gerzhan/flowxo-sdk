'use strict';

var util = require('util');

/**
 * BaseError
 *
 * Base class for all error classes
 */
function BaseError(message, err) {
  this.__fxotype__ = this.constructor.name;
  this.message = message || this.__fxotype__;
  if(err) {
    this.err = err;
  }
}

util.inherits(BaseError, Error);

BaseError.prototype.toString = function toString() {
  var str = this.constructor.name;
  if(this.message) {
    str += ': ' + this.message;
  }

  return str;
};

BaseError.prototype.inspect = function inspect() {
  return '[' + this.toString() + ']';
};

var FXOError = {};

/**
 * ServiceError
 */
FXOError.ServiceError = function ServiceError(message, err) {
  BaseError.call(this, message, err);
};
util.inherits(FXOError.ServiceError, BaseError);

/**
 * AuthError
 */
FXOError.AuthError = function AuthError(message, err) {
  BaseError.call(this, message, err);
};
util.inherits(FXOError.AuthError, BaseError);

module.exports = FXOError;
