var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);

  var tupleArray = this._storage.get(index);

  if (!tupleArray) {
    tupleArray = [];
    this._storage.set(index, tupleArray);
  }

  var pairFound = false;

  for (var i = 0; i < tupleArray.length; i++) {
    var tuple = tupleArray[i];

    if (tuple[0] === key) {
      tuple[1] = value;
      pairFound = true;
      break;
    }
  }

  if (!pairFound) {
    tupleArray.push([key, value]);
    this._size++;
    if (this._size > 0.75 * this._limit)  {
      this._resize(this._limit*2);
    }
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);

  var tupleArray = this._storage.get(index) || [];

  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }
  return null;

};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var tupleArray = this._storage.get(index) || [];

  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if (tuple[0] === key) {
      tupleArray.splice(j, 1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this.resize(this._limit/2);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(newSize){
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;

  oldStorage.each(function(tupleArray) {
    if (tupleArray === undefined) {return; }
    for (var i = 0; i < tupleArray.length; i++) {
      var tuple = tupleArray[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
