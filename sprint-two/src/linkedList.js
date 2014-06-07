var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var node;
  

  list.addToTail = function(value){
   // create new node, add node to tail, make new node tail, set previous tail's next 
   // to equal current tail
    
    node = makeNode(value);
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
    list.tail.next = node;
    } 

    list.tail = node;
  };

  list.removeHead = function(){
    var removeIt = list.head['value'];
    list.head = list.head.next;
    return removeIt;
  };

  list.contains = function(target, node){
    var node = node || list.head;
    if (node['value'] === target) {
      return true;
    } else if (node.next !== null) {
      return list.contains(target, node.next);
    }
    return false;
  };
  return list;
};



var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
