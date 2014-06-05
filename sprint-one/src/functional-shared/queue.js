
var queueMethods = {};
queueMethods.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function() {
  if (this._size) {
    var result = this._storage['0'];
    delete this._storage['0'];
    for (var key in this._storage) {
      this._storage[parseInt(key - 1)] = this._storage[key];
      delete this._storage[key];
    }
    this._size--;
  }
  return result;
};
queueMethods.size = function() {
  return this._size;
};


var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance._storage = {};
  instance._size = 0;
  // _.extend(instance, queueMethods);
  instance.dequeue = queueMethods.dequeue;
  instance.enqueue = queueMethods.enqueue;
  instance.size = queueMethods.size;
  return instance;
};