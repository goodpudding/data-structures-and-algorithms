'use strict';

const Queue = require('../linked-list/Queue');

class Node {
  constructor() {
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  preOrder(node) {
    console.log(node.value);
    if (node.leftChild) {
      this.preOrder(node.leftChild);
    }
    if (node.rightChild) {
      this.preOrder(node.rightChild);
    }
  }

  order(node) {
    if (node.leftChild) {
      this.preOrder(node.leftChild);
    }
    console.log(node.value);
    if (node.rightChild) {
      this.preOrder(node.rightChild);
    }
  }

  postOrder(node) {
    if (node.leftChild) {
      this.preOrder(node.leftChild);
    }
    if (node.rightChild) {
      this.preOrder(node.rightChild);
    }
    console.log(node.value);
  }

  breadthFirst(node) {
    let visited = new Queue();
    visited.enqueue(node);

    while (visited.peek()) {
      let current = visited.dequeue();
      console.log(current.value);
      if (current.leftChild) {
        visited.enqueue(current.leftChild);
      }
      if (current.rightChild) {
        visited.enqueue(current.rightChild);
      }
    }
  }
}

module.exports = {
  BinaryTree,
  Node
};
