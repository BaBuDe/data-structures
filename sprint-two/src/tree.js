var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var child = makeTree(value);
	child.parent = this;
	this.children.push(child);

};

// treeMethods.contains = function(target, topNode){
// 	var topNode = topNode || this;
// 	var foundTarget = false;

// 	var traverser = function (node) {
// 		if (node.value === target) {
// 			foundTarget = true;
// 		} else if (node.children) {
// 				_.each(node.children, function (child) {
// 					traverser(child);
// 				});
// 			}
// 	}
// 	traverser(topNode);
// 	return foundTarget;
// };
treeMethods.contains = function (target, topNode) {
	var topNode = topNode || this;
	var foundTarget = false;

	var traverser = function(node) {
		if (node.children) {
			_.each(node.children, function(child) {
				if (child === target) {
					foundTarget = true;
				} else {
					traverser(child);
				}
			});
			}
		}
		traverser(topNode);
		return foundTarget;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
