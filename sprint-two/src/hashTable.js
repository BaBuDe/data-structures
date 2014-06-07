var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
  // this.myHash = [];
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
 
  this._storage[index] = value;
  // var newArray = this._storage.get(index);
  this._size++;
  //create a variable R that will retrieve the contents at index using this._storage.get
  //loop through keys of R
  //then look at the key-value string pair arrays 
  //if the first value in the key-value string pairs equals the key, set the second string to the value passed in
  //if the key is not in R, then push [key, value] to R
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);

  return this._storage[index];
  //takes key and limit to find key's bucket
  //within bucket, search the keys for key
  //return the value at key

};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage[index] = null;
  // this._size--;

};

// var makeLinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;
//   var node;
  

//   list.addToTail = function(value){
//    // create new node, add node to tail, make new node tail, set previous tail's next 
//    // to equal current tail
    
//     node = makeNode(value);
//     if (list.head === null) {
//       list.tail = node;
//       list.head = node;
//     } else {
//     list.tail.next = node;
//     } 

//     list.tail = node;
//   };

//   list.removeHead = function(){
//     var removeIt = list.head['value'];
//     list.head = list.head.next;
//     return removeIt;
//   };

//   list.contains = function(target, node){
//     var node = node || list.head;
//     if (node['value'] === target) {
//       return true;
//     } else if (node.next !== null) {
//       return list.contains(target, node.next);
//     }
//     return false;
//   };
//   return list;
// };



// var makeNode = function(value){
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };


// HashTable.prototype.resize = function(newSize)){
//   //create new limitedArray with new size when storage array's size > limit * 0.75;
			//loop back through all the keys and re-run the hash functions using the new length
			//
//   if (this._size >= this._limit) {
//     this._limit = this._limit * 2;
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
