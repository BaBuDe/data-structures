var makeQueue = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {

    if (size > 0) {
      var result = storage['0'];
      // decouple storage and size: deleting
      delete storage['0'];
      for (var key in storage) {
        storage[parseInt(key-1)] = storage[key];
        delete storage[key];
      }
      // decrement size
      size--;
    }
    // reset size to match current size
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
