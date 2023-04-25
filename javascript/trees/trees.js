'use strict';

const Queue = require('../linked-list/Queue');

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addANode(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      const emptyNode = this.findEmpty(this.root);
      if (emptyNode.leftChild === null) {
        emptyNode.leftChild = node;
      } else {
        emptyNode.rightChild = node;
      }
    }
  }

  findEmpty(node) {
    const queue = [];
    queue.push(node);

    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode.leftChild === null || currentNode.rightChild === null) {
        return currentNode;
      }
      queue.push(currentNode.leftChild);
      queue.push(currentNode.rightChild);
    }
  }

  preOrder(node, arr) {
    console.log('NODE VALUE', arr);
    let value = node.value;
    if (node.value) {
      arr.push(value);
    }
    if (node.leftChild !== null) {
      this.preOrder(node.leftChild, arr);
    }
    if (node.rightChild !== null) {
      this.preOrder(node.rightChild, arr);
    }
    return arr;
  }

  inOrder(node, arr) {
    console.log('NODE', node.value);
    if (node.leftChild) {
      this.inOrder(node.leftChild, arr);
    }
    arr.push(node.value);
    if (node.rightChild) {
      this.inOrder(node.rightChild, arr);
    }
    return arr;
  }

  postOrder(node, arr) {
    if (node.leftChild) {
      this.postOrder(node.leftChild, arr);
    }
    if (node.rightChild) {
      this.postOrder(node.rightChild, arr);
    }
    arr.push(node.value);
    return arr;
  }

  breadthFirst(node) {
    let visited = new Queue();
    let arr = [];
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      arr.push(current.value);
      if (current.leftChild) {
        visited.enqueue(current.leftChild);
      }
      if (current.rightChild) {
        visited.enqueue(current.rightChild);
      }
    }
    return arr;
  }

  //   breadthFirstKary(node) {
  //     let visited = new Queue();
  //     visited.enqueue(node);
  //     while (!visited.isEmpty()) {
  //       let current = visited.dequeue();
  //       if (current.children) {
  //         for (let i = 0; i < current.children.length; i++) {
  //           visited.enqueue(current.children[i]);
  //         }
  //       }
  //     }
  //   }
  // }

  treeMax() {
    let max = 0;
    this.inOrder(this.root).forEach((idx) => {
      if (idx > max) {
        max = idx;
      }
    });
    return max;
  }
}

module.exports = {
  BinaryTree,
  Node,
};
