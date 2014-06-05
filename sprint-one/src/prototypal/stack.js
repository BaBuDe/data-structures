var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._size = 0;
  return instance;
};

var stackMethods = {
  push: function(value) {
    this._storage[this._size] = value;
    this._size++;
  },
  pop: function() {
    this._size && this._size--;
    var result = this._storage[this._size];
    return result;
  },
  size: function() {
    return this._size;
  }
};
