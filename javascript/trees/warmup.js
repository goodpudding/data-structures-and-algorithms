"use strict";

class Node {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k);
  }
}

class Tree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
  breadthKArray(tree) {
    let current = tree.root;
    if (current.children.length === 0) {
      return tree.root.value;
    }
    this.root.children.array.forEach(child => {
      current = child;
      this.breadthKArray(child.children);
    });

  }
}
