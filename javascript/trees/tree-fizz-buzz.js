class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) {
    return new KaryTree();
  }

  const newRoot = new Node(fizzBuzz(tree.root.value));
  const newTree = new KaryTree(newRoot);
  copyWithFizzBuzz(tree.root, newRoot);

  return newTree;
}

function fizzBuzz(value) {
  let result = '';

  if (value % 3 === 0) {
    result += 'Fizz';
  }
  if (value % 5 === 0) {
    result += 'Buzz';
  }

  return result || value.toString();
}

function copyWithFizzBuzz(node, newNode) {
  for (const child of node.children) {
    const newChild = new Node(fizzBuzz(child.value));
    newNode.children.push(newChild);
    copyWithFizzBuzz(child, newChild);
  }
}
// Add the following lines at the end of the fizzBuzzTree.js file
module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree
};
