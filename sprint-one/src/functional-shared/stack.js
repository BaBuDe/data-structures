var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance._storage = {};
  instance._size = 0;
  // _.extend(instance, stackMethods);
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};
stackMethods.size = function() {
  return this._size;
};
