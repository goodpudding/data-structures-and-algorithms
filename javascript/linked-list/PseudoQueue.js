'use strcit';

const Stack = require('./Stack');

class PseudoQueue{
  constructor(){
    this.loadStack = new Stack();
    this.unloadStack = new Stack();
  }

  enqueue(value) {
    while (this.unloadStack.peek()!== 'empty stack') {
      this.loadStack.push(this.unloadStack.pop());
    }
    this.loadStack.push(value);

  }
  dequeue() {
    while (this.loadStack.peek() !== 'empty stack') {
      this.unloadStack.push(this.loadStack.pop());
    }
    return this.unloadStack.pop();
  }
}

module.exports = PseudoQueue;
