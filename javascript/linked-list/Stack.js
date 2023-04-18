'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'empty stack';
    }
    const value = this.peek();
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return 'empty stack';
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
