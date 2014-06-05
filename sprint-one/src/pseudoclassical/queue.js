var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._size = 0;

};
  Queue.prototype.enqueue = function (value) {
  	this._storage[this._size] = value;
  	this._size++;
  };

  Queue.prototype.dequeue = function() {
  	if (this._size > 0) {
  		var result = this._storage['0'];
  		delete this._storage['0'];
  		for (var i in this._storage) {
  			this._storage[parseInt(i-1)] = this._storage[i];
  			delete this._storage[i];
  		}
  		this._size--;
  		return result;
  	}
  };

  Queue.prototype.size = function() {
  	return this._size;
  };






