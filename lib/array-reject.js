Array.prototype.reject = function() {
  var args = Array.from(arguments);
  var callback = args.shift();
  var negatedCallback = callback && function() {
    return !callback.apply(this, arguments);
  };
  args.unshift(negatedCallback);
  return this.filter.apply(this, args);
};
